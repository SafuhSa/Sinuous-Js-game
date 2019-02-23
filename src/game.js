const MovingObject = require('./moving_object');

class Game {
  constructor(options) {
    this.time = 0;
    // this.duration = 0;
    this.score = 0;
    this.life = 3;
    this.level = options.level;
    this.ctx = options.ctx;
    this.canvas = options.canvas;
    this.run = options.run;
    this.demo = options.demo

    this.moving_objs = new MovingObject({
      ctx: this.ctx,
      canvas: this.canvas,
      game: this,
      nums: this.level,
      demo: options.demo,
      run: this.run

    });

    this.start = this.start.bind(this)
    this.update = this.update.bind(this)

  }

  start() {
    if(this.pauseTime) {
      this.time = this.time + (Date.now() - this.pauseTime);
      this.pauseTime = null;
    } else {
      this.time = Date.now()
    }
    
    requestAnimationFrame(this.update.bind(this));
  }
  
  
  update() {
    this.fillrec();
    this.moving_objs.update()
    this.gameOver()
    this.updatehtml()
    if (this.run === 'start') {
      this.moving_objs.run = 'start'
        requestAnimationFrame(this.update);
        // annimation()
      }
      if (this.run === 'pause') {
        this.moving_objs.run = 'pause'
        this.pauseTime = Date.now();
      }
    }

    
  updatehtml() {
    if (this.run === 'start' && !this.demo) {
      let duration = Math.floor((Date.now() - this.time) / 1000);

      this.score = Math.floor((Date.now() - this.time)/100)
      let score = document.getElementsByClassName("score");
      score[0].innerHTML = "Score: " + this.score;
      score[1].innerHTML = "Score: " + this.score;
      
      let time = document.getElementsByClassName("time");
      time[0].innerHTML = "Time: " + duration + 's';
      time[1].innerHTML = "Time: " + duration + 's';
     }


    let lifes = document.getElementsByClassName('lifes')
    lifes[0].innerHTML = 'Lives: ' + this.life
    lifes[1].innerHTML = 'Lives: ' + this.life
  }

    gameOver() {
      if (this.run === 'restart' || this.life <= 0) {
        this.run = 'restart';
        let doc = document.getElementById("game-over")
        doc.style.display = "block";
        doc.style.height = "133px";
        doc.style.width = "330px";
        doc.innerHTML = 
        "Game over" +
        ' Your score: ' + this.score;
        // document.location.reload()
      }
    }


    fillrec(h, w) {
      // this.ctx.fillStyle = "black";
      // this.ctx.fillRect(0, 0, w, h);
      // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      let background = new Image()
      background.src = "./images/dark-sky.jpg"
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    }
    
  }
  module.exports = Game;
