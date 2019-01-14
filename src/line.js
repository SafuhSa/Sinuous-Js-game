class Line {
  constructor(options) {
    this.ctx = options.ctx;
    this.crl = options.cursor
    this.xs = [options.cursor.ball_x]
    this.ys = [options.cursor.ball_y]
    
    this.draw = this.draw.bind(this)
    // setInterval(this.updatePos.bind(this), 1000 / 500)
  }
  
  updatePos() {
      this.xs = this.xs.map(val => val - 2)
      this.ys = this.ys.map(val => val + 1.2)

      this.xs.push(this.crl.ball_x)
      this.ys.push(this.crl.ball_y)
    
    
    if (this.xs.length > 50) {
      this.xs.shift()
      this.ys.shift()
    }
  }
  
  draw() {
    this.updatePos()
    for (let i = 0; i < this.xs.length - 1; i++) {
      const x = this.xs[i];
      const x1 = this.xs[i + 1];
      const y = this.ys[i];
      const y1 = this.ys[i + 1];
      
      this.drawline(x, y, x1, y1)
    }
  }
  
  
  
  drawline(fromx, fromy, toX, toY) {
    this.ctx.strokeStyle = "#4abaa3";
    this.ctx.lineWidth = 3;

    // this.ctx.fillStyle = "#4abaa3";
    // this.ctx.beginPath();
    // this.ctx.arc(fromx, fromy, 2, 0, 2 * Math.PI, true);
    // this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(fromx, fromy);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
  }
}

module.exports = Line;