const MovingObject = require('./moving_object');

class Game {
  constructor(options) {
    this.score;
    this.life = 3;
    this.level = options.level;
    this.ctx = options.ctx;
    this.canvas = options.canvas;
    this.run = options.run;
    // this.background = new

    this.moving_objs = new MovingObject({
      ctx: this.ctx,
      canvas: this.canvas,
      game: this,
      nums: 5,
      demo: options.demo,
      run: this.run

    });

    this.start = this.start.bind(this)
    this.update = this.update.bind(this)

  }

  start() {
      requestAnimationFrame(this.update.bind(this));
  }


  update() {
      this.fillrec();
      this.moving_objs.update()
      this.gameOver()
       
      if (this.run === 'start') {
        this.moving_objs.run = 'start'
        this.annimate =  requestAnimationFrame(this.update);
        // annimation()
      }
      if (this.run === 'pause') {
        this.moving_objs.run = 'pause'
      }
    }

    
    
    gameOver() {
      if (this.run === 'restart' || this.life <= 0) {
        this.run = 'restart';
        let doc = document.getElementById("game-over")
        doc.style.display = "block";
        doc.innerHTML = "Game over";
        // document.location.reload()
      }
    }


    fillrec(h, w) {
      // this.ctx.fillStyle = "black";
      // this.ctx.fillRect(0, 0, w, h);
      // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      let background = new Image()
      background.src = "./imges/dark-sky.jpg"

      
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    }
    
  }
  module.exports = Game;
  // }
  
  // update() {
    
    //   const annimation = () => {
      //     this.annimate = requestAnimationFrame(annimation);
      //     this.fillrec();
      //     this.moving_objs.update()
      //     if (this.run === 'restart' || this.life < 0) {
        //       this.run === 'restart'
        //       // debugger
        //       cancelAnimationFrame(this.annimate);
        //     }
        //   }