function changeSpeed() {
  var speed = prompt(
    "Congrats! You're using a new version! Enter new playback speed"
  );
  document.querySelector("video").playbackRate = parseFloat(speed);
}
