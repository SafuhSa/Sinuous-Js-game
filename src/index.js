const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 1000
  canvasEl.height = 600;


  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  const game = new Game({ctx: ctx, canvas: canvasEl, level: 1});

  game.start()
});




console.log("Webpack is working!");
