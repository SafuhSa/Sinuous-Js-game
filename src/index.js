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

  const demo = new Game({ctx: ctx, canvas: canvasEl, level: 1, demo: 'right_canvas', run: 'start'});
  demo.start()

  let game;
  let doc = document.getElementsByClassName('start');
  let pause = document.getElementById("pause")

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains("start")) {
      demo.run = 'pause'
      game = new Game({ ctx: ctx, canvas: canvasEl, level: 1, demo: false });
      game.run = 'start';
      updatehtml(doc, pause, game);
      game.start();
      
    } else if (event.target.classList.contains("pause-play") || event.target.classList.contains("fas")) {
        if (!game || game.run == "restart") {
               demo.run = "pause";
               game = new Game({ ctx: ctx, canvas: canvasEl, level: 1, demo: false });
              }
              
              
              if (game.run === "start") {
                game.run = "pause";
              } else {
                game.run = "start";
              }
              updatehtml(doc, pause, game);
             game.start();
             // sound.stop()
           }
  });
});


//python -m SimpleHTTPServer

function updatehtml(doc, pause, game) {
  for (let i = 0; i < doc.length; i++) {
    const el = doc[i];
    if (el.innerHTML === 'Start') {
      el.innerHTML = 'Restart';
    } else {
      el.innerHTML = 'Start';
    }
  }


  if (game.run === "start") {

    pause.removeChild(pause.childNodes[0]);
    pause.innerHTML = " || ";
  } else {

    let icon = document.createElement("I");
    icon.classList.add("fas");
    icon.classList.add("fa-play");
    pause.removeChild(pause.childNodes[0]);
    pause.appendChild(icon);
  }
}


console.log("Webpack is working!");
