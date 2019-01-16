const MovingObject = require('./moving_object');

class Game {
  constructor(options) {
    this.score;
    this.life = 5;
    this.level = options.level;
    this.ctx = options.ctx;
    this.canvas = options.canvas;
    this.run = options.run;

    this.moving_objs = new MovingObject({
      ctx: this.ctx,
      canvas: this.canvas,
      game: this,
      nums: 5,
      demo: options.demo

    });

    this.start = this.start.bind(this)
    this.update = this.update.bind(this)

  }

  start() {
     requestAnimationFrame(this.update.bind(this));
      // this.update()
      // debugger
  }


  update() {
    

      this.fillrec();
      this.moving_objs.update()
      if (this.run === 'restart' || this.life <= 0) {
        this.run === 'restart';
        document.location.reload()
      }
      
      
      
      if (this.run === 'start') {
        this.annimate =  requestAnimationFrame(this.update);
        // debugger
        // annimation()
      }
    }
    
    fillrec(h, w) {
      this.ctx.fillStyle = "black";
      // this.ctx.fillRect(0, 0, w, h);
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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