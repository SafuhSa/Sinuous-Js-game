const MovingObject = require('./moving_object');

class Game {
  constructor(options) {
    this.score;
    this.life = 5;
    this.level = options.level;
    this.ctx = options.ctx
    this.canvas = options.canvas

    this.moving_objs = new MovingObject({
      ctx: this.ctx,
      canvas: this.canvas,
      game: this,
      nums: 5
    });
    this.start = this.start.bind(this)
    this.update = this.update.bind(this)
  }

  start() {

    window.requestAnimationFrame(this.update.bind(this));
  }


  update() {
    this.fillrec();
    this.moving_objs.update()

    window.requestAnimationFrame(this.update);
  }

  fillrec(h, w) {
    this.ctx.fillStyle = "black";
    // this.ctx.fillRect(0, 0, w, h);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
module.exports = Game;