const Game = require("./game");
import { Howl } from 'howler';
import _ from 'lodash';
document.addEventListener("DOMContentLoaded", function() {
  const ftcanvas = document.getElementById("first-canvas");
  const ftctx = ftcanvas.getContext("2d");
  const fake = new Game({ ctx: ftctx, canvas: ftcanvas, level: 2, demo: 'left_canvas', run: 'start' })
  fake.start()

  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 1000;
  canvasEl.height = 600;

  // let sound = new Howl ({
  //   src: ['/src/Two.mp3'],
  //   buffer: true,
  //   loop: true
  // })


  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  const demo = new Game({ctx: ctx, canvas: canvasEl, level: 1, demo: 'right_canvas', run: 'start'});
  demo.start()

  let game;
  let doc = document.getElementById('start')
    doc.addEventListener('click', () => {
      // doc.location.reload()
    if (doc.innerHTML === 'Start') {
      doc.innerHTML = 'Restart';
    } else {
      doc.innerHTML = 'Start';
    }
    game = new Game({ctx: ctx, canvas: canvasEl, level: 1, demo: false});
    game.run = 'start';
    game.start()
    // sound.play()
  })

  document.getElementById("pause").addEventListener("click", () => {
    if(!game) {
      game = new Game({ ctx: ctx, canvas: canvasEl, level: 1, demo: false });
    }
    if (game.run === 'pause') {
      game.run = 'start'
    } else {
      game.run = 'pause';
    }
    game.start();
    // sound.stop()
  });

});

//python -m SimpleHTTPServer




console.log("Webpack is working!");
