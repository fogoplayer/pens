function toggleLeft() {
  let classes = document.querySelector(".left-sidebar").classList;
  let expandLeft = document.getElementById("expand-left");

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    document.body.classList.add("left-sidebar-hidden");
    expandLeft.style.visibility = "hidden";
  } else {
    classes.add("hidden");
    document.body.classList.add("left-sidebar-hidden");
    expandLeft.style.visibility = "visible";
  }
}

function toggleRight() {
  let classes = document.querySelector(".right-sidebar").classList;
  let expandRight = document.getElementById("expand-right");

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    document.body.classList.add("right-sidebar-hidden");
    expandRight.style.visibility = "hidden";
  } else {
    classes.add("hidden");
    document.body.classList.add("right-sidebar-hidden");
    expandRight.style.visibility = "visible";
  }
}

window.onresize = function () {
  const width = window.innerWidth;
  let leftSidebarClassList = document.querySelector(".left-sidebar").classList;
  let rightSidebarClassList = document.querySelector(".right-sidebar")
    .classList;
  let expandLeft = document.getElementById("expand-left");
  let expandRight = document.getElementById("expand-right");

  if (width < 1024) {
    if (!rightSidebarClassList.contains("floating")) {
      rightSidebarClassList.add("floating", "hidden");
      expandRight.style.visibility = "visible";
    }
  } else {
    rightSidebarClassList.remove("floating", "hidden");
    expandRight.style.visibility = "hidden";
  }

  if (width < 800) {
    if (!leftSidebarClassList.contains("floating")) {
      leftSidebarClassList.add("floating", "hidden");
      expandLeft.style.visibility = "visible";
    }
  } else {
    leftSidebarClassList.remove("floating", "hidden");
    expandLeft.style.visibility = "hidden";
  }
};

window.onresize(); // Determine inital classes. I could have set it with a media query, but the logic is already here
Array.from(document.querySelectorAll(".sidebar")).forEach(
  (sidebar) => (sidebar.style.display = "block")
); // Set sidebars to display="none" and then reveal them after page load to avoid animation on initial page load
