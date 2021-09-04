function toggleLeft() {
  let bodyClassList = document.body.classList;
  let expandLeft = document.getElementById("expand-left");

  if (bodyClassList.contains("left-sidebar-hidden")) {
    bodyClassList.remove("left-sidebar-hidden");
    expandLeft.style.visibility = "hidden";
  } else {
    bodyClassList.add("left-sidebar-hidden");
    expandLeft.style.visibility = "visible";
  }
}

function toggleRight() {
  let bodyClassList = document.body.classList;
  let expandRight = document.getElementById("expand-right");

  if (bodyClassList.contains("right-sidebar-hidden")) {
    bodyClassList.remove("right-sidebar-hidden");
    expandRight.style.visibility = "hidden";
  } else {
    bodyClassList.add("right-sidebar-hidden");
    expandRight.style.visibility = "visible";
  }
}

window.onresize = function () {
  const width = window.innerWidth;
  let bodyClassList = document.body.classList;
  let expandLeft = document.getElementById("expand-left");
  let expandRight = document.getElementById("expand-right");

  if (width < 1024) {
    if (!bodyClassList.contains("right--sidebar-floating")) {
      bodyClassList.add("right-sidebar-hidden", "right-sidebar-floating");
      expandRight.style.visibility = "visible";
    }
  } else {
    bodyClassList.remove("right-sidebar-hidden", "right-sidebar-floating");
    expandRight.style.visibility = "hidden";
  }

  if (width < 800) {
    if (!bodyClassList.contains("left--sidebar-floating")) {
      bodyClassList.add("left-sidebar-hidden", "left-sidebar-floating");
      expandLeft.style.visibility = "visible";
    }
  } else {
    bodyClassList.remove("left-sidebar-hidden", "left-sidebar-floating");
    expandLeft.style.visibility = "hidden";
  }
};

window.onresize(); // Determine inital classes. I could have set it with a media query, but the logic is already here
Array.from(document.querySelectorAll(".sidebar")).forEach(
  (sidebar) => (sidebar.style.display = "block")
); // Set sidebars to display="none" and then reveal them after page load to avoid animation on initial page load
