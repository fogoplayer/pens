javascript: (function () {
  var speed = prompt("Enter new playback speed");
  document.querySelector("video").playbackRate = parseFloat(speed);
})();
