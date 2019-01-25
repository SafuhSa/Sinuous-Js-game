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
  let audio = new Audio("./Track7.mp3");
  let sound = false;

  

  const demo = new Game({ctx: ctx, canvas: canvasEl, level: 1, demo: 'right_canvas', run: 'start'});
  demo.start()

  let game;
  let doc = document.getElementsByClassName('start');
  let pause = document.getElementById("pause")
  let level = 1
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains("start")) {
      if (!game || game.run == 'restart') {
        demo.run = 'pause'
        game = new Game({ ctx: ctx, canvas: canvasEl, level: level, demo: false });
        game.run = 'start';
        updatehtml(doc, pause, game);
        game.start();
        audio.play();
        sound = true;
      } else {
        document.location.reload();
      }
      
    } else if (event.target.classList.contains("fa-play") || event.target.id === "pause") {
             if (!game || game.run == "restart") {
               demo.run = "pause";
               game = new Game({
                 ctx: ctx,
                 canvas: canvasEl,
                 level: 1,
                 demo: false
               });
               audio.play();
               sound = true;
             }

             if (game.run === "start") {
               game.run = "pause";
               updatehtml(doc, pause, game);
               audio.pause();
               // document.location.reload()
             } else {
               game.run = "start";
               updatehtml(doc, pause, game);
               if (sound) audio.play();
               game.start();
             }
             // audio.stop()
    } else if (event.target.classList.contains("fa-volume-mute") || event.target.classList.contains("fa-volume-up") ) {
             let mute = document.getElementsByClassName("mute")[0];
             let icon = document.createElement("I");
             icon.classList.add("fas");
             if (sound) {
               sound = false;
               audio.pause();
               icon.classList.add("fa-volume-mute");
               mute.removeChild(mute.childNodes[0]);
               mute.appendChild(icon);
               // < i class="fas fa-volume-up" ></i >
             } else {
               sound = true;
               audio.play();

               icon.classList.add("fa-volume-up");
               mute.removeChild(mute.childNodes[0]);
               mute.appendChild(icon);
             }
    } else if (event.target.classList.contains("level-btns")) {
      let btns = document.getElementsByClassName("level-btns");
      for (let i = 0; i < btns.length; i++) {
        const el = btns[i];
        el.style.backgroundColor = "#333333";
      }
      event.target.style.backgroundColor = "red";
      level = event.target.getAttribute("key") * 5;
    }
  });
});



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
    // let p = document.createElement("P");
    // p.classList.add('')
    pause.removeChild(pause.childNodes[0]);
    pause.innerHTML = " || ";

  } else {
    
    let icon = document.createElement("I");
    // icon
    icon.classList.add("fas");
    icon.classList.add("fa-play");
    pause.removeChild(pause.childNodes[0]);
    pause.appendChild(icon);
  }
}


console.log("Webpack is working!");
