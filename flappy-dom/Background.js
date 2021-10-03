const VH = window.innerHeight / 100;

export default class Background {
  constructor(pipeNum) {
    this.background = document.getElementById("background");

    this.background.style.transitionDuration = `${pipeNum}s`;
    this.background.style.width = `${40 * VH * pipeNum}px`;

    this.pipes = new Array(pipeNum);
    for (let pipe of this.pipes) {
      const newPipe = document.createElement("div");
      newPipe.classList.add("pipe-container");

      const gapHeight = Math.random() * 50 + 25;

      const topPipe = document.createElement("img");
      topPipe.classList.add("pipe", "top-pipe");
      topPipe.style.height = `${(100 - gapHeight - 20) * VH}px`;
      newPipe.appendChild(topPipe);

      const bottomPipe = document.createElement("img");
      bottomPipe.classList.add("pipe", "bottom-pipe");
      bottomPipe.style.height = `${(gapHeight - 20) * VH}px`;
      newPipe.appendChild(bottomPipe);

      this.background.appendChild(newPipe);
      pipe = newPipe;
    }
  }

  start() {
    this.background.style.marginLeft = "calc(-100% + 100vw)";
  }
}
