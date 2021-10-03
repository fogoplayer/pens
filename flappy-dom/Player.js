const VH = window.innerHeight / 100;
const G = 4.9 * 10 * VH;

export default class Player {
  constructor() {
    this.player = document.getElementById("player");
    this.y = window.innerHeight / 2;
    document.addEventListener("keydown", (e) => {
      this.flap();
    });
  }

  flap() {
    console.log("flap");
    const flapTime = 0.5;

    //Transition
    this.player.style.transitionDuration = `${flapTime}s`;
    this.player.style.transitionTimingFunction = "ease-out";

    // Position
    this.y = this.y + 15 * VH + this.player.offsetHeight;
    clearInterval(this.flapTime);
    this.flapTime = setTimeout(() => {
      this.fall();
    }, flapTime * 1000);
  }

  fall() {
    console.log("fall");

    // Transition
    const fallTime = Math.sqrt((2 * this.y) / G);
    this.player.style.transitionDuration = `${fallTime}s`;
    console.log("Fall Time:", fallTime);
    this.player.style.transitionTimingFunction = "ease-in";

    // Postition
    this.y = 0;
  }

  get y() {
    return window.innerHeight - this.player.offsetHeight - this.player.y;
  }

  set y(arg) {
    this.player.style.top = `${
      window.innerHeight - this.player.offsetHeight - arg
    }px`;
  }
}
