const Game = require("./game");
import { Howl } from 'howler';

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 1000
  canvasEl.height = 600;

  // let sound = new Howl ({
  //   src: ['/src/Two.mp3'],
  //   buffer: true,
  //   loop: true
  // })


  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  document.querySelector('button').addEventListener('click', () => {
    const game = new Game({ctx: ctx, canvas: canvasEl, level: 1});
    game.start()
    // sound.play()
  })

  // sound.stop()
});

//python -m SimpleHTTPServer




console.log("Webpack is working!");
