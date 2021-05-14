# Bookmarklets

### [Playback Speed](javascript: (function () {var speed = prompt("Enter new playback speed"); document.querySelector("video").playbackRate = parseFloat(speed); })();)

Finds the first `video` element on a page and prompts the user to set a playback speed (helpful for default video players that don't have playback speed controls, as well as for going beyond the max speed of players like Youtube and Vimeo).
