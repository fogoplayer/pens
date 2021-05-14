# Bookmarklets

### <a href="javascript: (function () {var speed = prompt("Enter new playback speed"); document.querySelector("video").playbackRate = parseFloat(speed); })();)">[Playback Speed</a>

Finds the first `video` element on a page and prompts the user to set a playback speed (helpful for default video players that don't have playback speed controls, as well as for going beyond the max speed of players like Youtube and Vimeo).
