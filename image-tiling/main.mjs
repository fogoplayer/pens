let aspectRatio = 1.5; // width / height
const PAPER_SIZES = {
  // storing in pixels so that it's measurement-system-agnostic
  letter: [ 816, 1056], // w / h
  a4: [792, 1128]
};
const UNITS = {
  inches: 96, // px
  centimeters: 37.8, // px
}
const form = document.querySelector("form");
form.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    formData[key] = value;
  }

  // Initialize variables
  let {
    image,
    width,
    height,
    units,
    paperSize,
    orientation,
    overlap,
    margin
  } = formData;
  let paperWidth, paperHeight;
  
  //Adjust variables
  image = await getImageFromFile(image) // convert image to datstring
  
  // convert dimensions to px
  width = width * UNITS[units]
  height = height * UNITS[units]
  overlap = overlap * UNITS[units]
  margin = margin * UNITS[units]
  if (orientation === "portrait") { // paper orientation
    [paperWidth, paperHeight] = PAPER_SIZES[paperSize]
  }else {
    [paperHeight, paperWidth] = PAPER_SIZES[paperSize]
  }
  
  const horizontalCount = getPageCount(width, paperWidth, overlap, margin)
  const verticalCount = getPageCount(height, paperHeight, overlap, margin)
  debugger
};


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
  await new Promise((resolve, reject)=>{
    img.onload = resolve
  })
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
  /*
  The final page count needs to include the target dimension, plus overlap and margins for each page
  paperDim - overlap - margin gives us the amount of useable space
  targetDim / that gives us the number of page
  */
  const unusablePerPage = 2 * (overlap + margin)
  const usablePerPage = paperDim - unusablePerPage
  const pageCount = targetDim / usablePerPage
  return Math.ceil(pageCount)
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
