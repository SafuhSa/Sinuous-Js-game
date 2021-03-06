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
    
    const sdb =  this.ctx.shadowBlur;
    const sdc =  this.ctx.shadowColor;
    const sdx = this.ctx.shadowOffsetX;
    const sdy = this.ctx.shadowOffsetY;

    this.ctx.shadowBlur = 8;
    this.ctx.shadowColor = "blue";
    this.ctx.shadowOffsetX = 5;
    this.ctx.shadowOffsetY = 5;

    this.ctx.beginPath();
    this.ctx.moveTo(fromx, fromy);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
    
    this.ctx.shadowBlur = sdb;
    this.ctx.shadowColor = sdc;
    this.ctx.shadowOffsetX = sdx;
    this.ctx.shadowOffsetY = sdy;
  }
}

module.exports = Line;