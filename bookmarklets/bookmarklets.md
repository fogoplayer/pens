To add a bookmarklet, click and drag the link into your bookmarks bar

<script src="https://fogoplayer.github.io/pens/bookmarklets/bookmarklets.js"></script>

<!-- Change Video Speed -->
<h4><a id="changespeed" href="">Change Video Speed</a></h4>
<script>
  changeSpeed = changeSpeed.toString();
  document.querySelector("#changespeed").href =
    "javascript: (" + changeSpeed + ")();";
</script>

Finds the first `video` element on a page and prompts the user to set a playback
speed (helpful for default video players that don't have playback speed
controls, as well as for going beyond the max speed of players like Youtube and
Vimeo).

<!-- Clip Kroger Coupons -->
<h4><a id="clipcoupons" href="">Clip Coupons</a></h4>
<script>
  clipCoupons = clipCoupons.toString();
  document.querySelector("#clipcoupons").href =
    "javascript: (" + clipCoupons + ")();";
</script>

When on the coupon page of the Kroger website (including most sub-brands), it
automatically clips coupons until you hit your limit.

<!-- Google Meet Full Screen -->
<h4><a id="meetfullscreen" href="">Google Meet Full Screen</a></h4>
<script>
  meetFullScreen = meetFullScreen.toString();
  document.querySelector("#meetfullscreen").href =
    "javascript: (" + meetFullScreen + ")();";
</script>

When in a Google Meet meeting, it hides extraneous UI elements to provide maximum screen real estate for a pinned feed.

Prerequisites:

- The [new Google Meet layout](https://support.google.com/meet/answer/10550593)
- A meeting open in _Spotlight_ view (other views will cause bugs)

To use:

- Click on the bookmarklet to prime the
- Put the Meet window in full screen with a double click, press of F11, or use of the full screen button in the Meet UI. (The modifications remain even if the user exits full screen).
- To reset to the defualt view, refresh the page.
