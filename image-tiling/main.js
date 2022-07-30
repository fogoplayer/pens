let aspectRatio = 1.5; // width / height
const PAPER_SIZES = {
  // storing in pixels so that it's measurement-system-agnostic
  letter: [816, 1056], // w / h
  a4: [792, 1128],
};
const UNITS = {
  inches: 96, // px
  centimeters: 37.8, // px
};
const form = document.querySelector("form");
form.onsubmit = async (e) => {
  e.preventDefault();

  const output = document.querySelector("#output");
  output.innerHTML = "";

  const formData = new FormData(form);
  for (const [key, value] of formData) {
    formData[key] = value;
  }

  // Initialize variables
  let { image, width, height, units, paperSize, orientation, overlap, margin } =
    formData;
  let paperWidth, paperHeight;

  //Adjust variables
  // image = await getImageFromFile(image); // convert image to datstring
  image = document.querySelector("#preview"); // convert image to datstring

  // convert dimensions to px
  width = width * UNITS[units];
  height = height * UNITS[units];
  overlap = overlap * UNITS[units];
  margin = margin * UNITS[units];
  if (orientation === "portrait") {
    // paper orientation
    [paperWidth, paperHeight] = PAPER_SIZES[paperSize];
  } else {
    [paperHeight, paperWidth] = PAPER_SIZES[paperSize];
  }

  image = resizeImg(image, width, height);

  const horizontalCount = getPageCount(width, paperWidth, overlap, margin);
  const verticalCount = getPageCount(height, paperHeight, overlap, margin);

  // Set properties
  document.body.style.setProperty("--cols", horizontalCount);
  document.body.style.setProperty("--margin", margin + "px");

  for (let i = 0; i < verticalCount; i++) {
    for (let j = 0; j < horizontalCount; j++) {
      const canvas = cropImg(
        image,
        margin,
        (paperWidth - overlap) * j,
        (paperHeight - overlap) * i,
        paperWidth,
        paperHeight
      );
      output.appendChild(canvas);
    }
  }

  createPdf();
};

createPdf();

// Convert image to dataURL
document.querySelector("#file").onchange = async (e) => {
  var img = document.querySelector("#preview");
  if (!e.target.files[0]) {
    img.src = "";
    img.style.display = "none";
    return;
  }

  img.src = await getImageFromFile(e.target.files[0]);
  img.style.display = "block";
  await new Promise((resolve, reject) => {
    img.onload = resolve;
  });
  console.log(img.naturalWidth, img.naturalHeight);
  aspectRatio = img.naturalWidth / img.naturalHeight;
};

async function getImageFromFile(file) {
  const promise = new Promise((resolve, reject) => {
    /// Create reader
    var reader = new FileReader();
    reader.onload = function (e) {
      resolve(e.target.result);
    };
    // Run reader
    reader.readAsDataURL(file);
  });
  return promise;
}

function getPageCount(targetDim, paperDim, overlap, margin) {
  const unusablePerPage = 2 * (overlap + margin);
  const usablePerPage = paperDim - unusablePerPage;
  const pageCount = targetDim / usablePerPage;
  return Math.ceil(pageCount);
}

function resizeImg(img, width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
}

function cropImg(img, margin, x, y, width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(
    // source
    img,
    x,
    y,
    width,
    height,
    // output
    margin,
    margin,
    width - 2 * margin,
    height - 2 * margin
  );
  canvas.classList.add("page");
  document.querySelector("#output").appendChild(canvas);
  return canvas;
}

// Link dimensions
document.querySelectorAll(".ratioed").forEach((el) => {
  el.oninput = function rangeUpdate(e) {
    const { value, id, parentNode } = e.target;
    if (id === "width") {
      parentNode.querySelector("#height").value = value / aspectRatio;
    } else {
      parentNode.querySelector("#width").value = value * aspectRatio;
    }
  };
});

// Link ranges to outputs
document.querySelectorAll(".responsive").forEach((el) => {
  el.value = 0.5;
  el.max = 4;
  el.min = 0;
  el.step = 0.001;
  el.oninput = function rangeUpdate(e) {
    const value = e.target.value;
    const parent = e.target.parentNode;
    parent.querySelector("[type='range']").value = value;
    parent.querySelector("[type='number']").value = value;
  };
});

async function createPdf() {
  const { PDFDocument, StandardFonts, rgb } = window.PDFLib;

  const pdfDoc = await PDFDocument.create();

  const pages = Array.from(document.querySelectorAll(".page"));
  pages.forEach((page) => {
    const pdf = pdfDoc.addPage();
  });

  const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });

  const iframe = document.createElement("iframe");
  iframe.src = pdfBytes;
  // output.appendChild(iframe);
}
