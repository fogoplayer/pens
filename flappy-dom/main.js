import Player from "./Player.js";
import Background from "./Background.js";

const player = new Player();
const background = new Background(100);

setTimeout(() => {
  player.fall();
  background.start();
}, 3000);
