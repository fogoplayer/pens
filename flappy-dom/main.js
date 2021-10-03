import Player from "./Player.js";
import Background from "./Background.js";

const player = new Player();
const background = new Background(10);

setTimeout(() => {
  player.fall();
  background.start();
}, 1000);
