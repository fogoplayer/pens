const VH = window.innerHeight / 100;
const VW = window.innerWidth / 100;
const G = 4.9 * 10 * VH;

export default class Background {
  constructor(pipeNum) {
    this.background = document.getElementById("background");

    this.background.style.transitionDuration = `${pipeNum}s`;

    this.pipes = new Array(pipeNum);
    for (let pipe of this.pipes) {
      this.background.style.width = `${40 * VH * pipeNum}px`;
    }
  }

  start() {
    this.background.style.marginLeft = "calc(-100% + 100vw)";
  }
}
