function changeSpeed() {
  var speed = prompt("Enter new playback speed");
  document.querySelector("video").playbackRate = parseFloat(speed);
}

function clipCoupons() {
  if (!document.querySelector(".kds-Button--primary")) {
    alert("No coupons available");
    return;
  }

  let numOfCouponsCurrentlyDisplayed = document.querySelectorAll(
    ".kds-Button--primary" /* Use .kds-Button--cancel to bulk unclip */
  ).length;
  let numOfCouponsClipped = document.querySelectorAll(
    ".DashboardTile--value"
  )[2].innerText;

  if (
    confirm(
      `There are currently ${numOfCouponsCurrentlyDisplayed} unclipped coupons displayed, and you are allowed to clip up to ${
        150 - numOfCouponsClipped
      } more coupons. If you are ready for them to be clipped, click "Ok". If not, click "Cancel". \n\nYou may need to scroll to show more coupons or use filters to hide coupons that you don't want.`
    )
  ) {
    /* Get all coupon buttons */
    const clipCouponButtons = Array.from(
      document.querySelectorAll(".kds-Button--primary")
    );

    /* Limit array to clipped coupons limit of 150 */
    clipCouponButtons.length =
      clipCouponButtons.length > 150 ? 150 : clipCouponButtons.length;

    /* Clip all coupons in array */
    clipCouponButtons.forEach((clipButton) => {
      clipButton.click();
    });
  }
}

function meetFullScreen() {
  function makeFullScreen() {
    /* Divs appear in nested order */

    /* Feed Container */
    try {
      let FEED_CONTAINER = document.querySelector(
        "div.zWfAib.Z319Jd.QhPhw.a1pVef"
      );
      FEED_CONTAINER.style.inset = 0;
    } catch (e) {
      console.error("Feed Container .zWfAib.Z319Jd.QhPhw");
    }

    /* Feed Container 2 */
    try {
      let FEED_CONTAINER_2 = document.querySelector(
        "div.xsj2Ff.Zf0RDc.GskdZ.AwnI1b"
      );
      FEED_CONTAINER_2.style.height = "100%";
    } catch (e) {
      console.error("Feed Container 2 .xsj2Ff.Zf0RDc.GskdZ.AwnI1b");
    }

    /* Top Bar */
    try {
      let TOP_BAR = document.querySelector(".pHsCke");
      TOP_BAR.style.display = "none";
    } catch (e) {
      console.error("Top Bar .pHsCke");
    }

    /* Video */
    try {
      let FEED = document.querySelector(
        "div.xsj2Ff.Zf0RDc.AwnI1b > div.koV58.Zi94Db.S7urwe > div.p2hjYe.TPpRNe"
      );
      FEED.style.height = "100%";
      FEED.style.width = "100%";
      FEED.style.left = "unset";
    } catch (e) {
      console.error(
        "Feed div.xsj2Ff.Zf0RDc.AwnI1b > div.koV58.Zi94Db.S7urwe > div.p2hjYe.TPpRNe"
      );
    }

    /* Bottom Bar */
    try {
      let BOTTOM_BAR = document.querySelector("div.rG0ybd.xPh1xb.P9KVBf.LCXT6");
      BOTTOM_BAR.style.opacity = 0;
      BOTTOM_BAR.style.transition = "opacity .5s";

      BOTTOM_BAR.addEventListener("mouseenter", () => {
        BOTTOM_BAR.style.opacity = 0.8;
      });

      BOTTOM_BAR.addEventListener("mouseleave", () => {
        BOTTOM_BAR.style.opacity = 0;
      });
    } catch (e) {
      console.error("Bottom Bar div.rG0ybd.xPh1xb.P9KVBf.LCXT6");
    }
  }

  /* Triggers--Fullscreen & CTRL + F */
  window.addEventListener("fullscreenchange", () =>
    setTimeout(makeFullScreen, 100)
  );

  window.addEventListener(
    "keydown",
    (e) => {
      if (e.ctrlKey && e.keyCode === 70) {
        e.preventDefault();
        makeFullScreen();
      }
    },
    true
  );
}
