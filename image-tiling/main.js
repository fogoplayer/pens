const aspectRatio = 1.5; // width / height
const PAPER_SIZES = {
  // storing in pixels so that it's measurement-system-agnostic
  letter: { width: 816, height: 1056 },
  a4: { width: 792, height: 1128 }
};
const INCH = 96; // px
const CENTIMETER = 37.8; // px

const form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    formData[key] = value;
  }

  const {
    image,
    width,
    height,
    units,
    paperSize,
    orientation,
    overlap,
    margin
  } = formData;

  debugger;
};

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
