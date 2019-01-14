
class Circle {
  constructor(options) {
    this.canvas = options.canvas
    this.ctx = options.ctx

    this.ball_x = options.ball_x;
    this.ball_y = options.ball_y;
    this.radius = options.radius;
    this.color = options.color;
    this.draw = this.draw.bind(this)
    this.move = this.move.bind(this)
  }


  draw() {
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();

    this.ctx.arc(this.ball_x, this.ball_y, this.radius, 0, 2 * Math.PI, true);
    this.ctx.fill();
  };


  move() {
    if ((this.ball_x <= 0) || (this.ball_y >= 600)) {
      let pos = this.getrandom(this.ball_x, this.ball_y)
      this.ball_x = pos[0];//this.canvas.width;
      this.ball_y = pos[1];//0;
    } else {
      this.ball_x -= 2;
      this.ball_y += 1.2;
    }
    this.draw()
  };

  getrandom(x, y) {
    let new_y;
    let new_x;

    if (x <= 0 && y >= 600) {
      new_x = this.canvas.width;
      new_y = 0;
    } else if (x <= 0) {
      new_x = Math.floor(Math.random() * this.canvas.width) + 10;
      new_y = 0
    } else {
      new_x = this.canvas.width
      new_y = Math.floor(Math.random() * this.canvas.height) + 1;
    }

    return [new_x, new_y];
  }
}
module.exports = Circle;