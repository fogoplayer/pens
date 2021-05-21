### [Bookmarklets](https://github.com/fogoplayer/pens/tree/main/bookmarklets)

To add a bookmarklet, click and drag the link into your bookmarks bar

<script src="https://fogoplayer.github.io/pens/bookmarklets/bookmarklets.js"></script>

<!-- Change Video Speed -->
<h4><a id="changespeed" href=''>Change Video Speed</a></h4>
<script>
  changeSpeed = changeSpeed.toString();
  document.querySelector('#changespeed').href = "javascript: (" + changeSpeed + ")();";
</script>

Finds the first `video` element on a page and prompts the user to set a playback speed (helpful for default video players that don't have playback speed controls, as well as for going beyond the max speed of players like Youtube and Vimeo).

<!-- Clip Kroger Coupons -->
<h4><a id="clipcoupons" href="">Clip Coupons</a></h4>
<script>
  clipCoupons = clipCoupons.toString();
  document.querySelector("#clipcoupons").href =
    "javascript: (" + clipCoupons + ")();";
</script>

When on the coupon page of the Kroger website (including most sub-brands), it automatically clips coupons until you hit your limit.
