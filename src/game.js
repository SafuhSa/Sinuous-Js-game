const MovingObject = require('./moving_object');

class Game {
  constructor(options) {
    this.score;
    this.life = 5;
    this.level = options.level;
    this.ctx = options.ctx;
    this.canvas = options.canvas;
    this.run = 'start'

    this.moving_objs = new MovingObject({
      ctx: this.ctx,
      canvas: this.canvas,
      game: this,
      nums: 5
    });
    this.start = this.start.bind(this)
    this.update = this.update.bind(this)

    document.getElementById('lifes').innerHTML = 'level:' +  this.life
  }

  start() {
      // window.requestAnimationFrame(this.update.bind(this));
      this.update()
  }


  update() {
    
    const annimation = () => {
      this.annimate = requestAnimationFrame(annimation);
      this.fillrec();
      this.moving_objs.update()
      if (this.run === 'restart' || this.life < 5) {
        this.run === 'restart'
        // debugger
        cancelAnimationFrame(this.annimate);
      }
    }
    
    annimation()
    

    // if (this.run === 'start') {
    // }
  }

  fillrec(h, w) {
    this.ctx.fillStyle = "black";
    // this.ctx.fillRect(0, 0, w, h);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

}
module.exports = Game;