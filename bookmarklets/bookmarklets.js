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
