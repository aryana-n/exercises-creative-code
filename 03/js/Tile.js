class Tile {
  constructor(x, y, size, color, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = false;
    this.angle = Math.round(Math.random()) * (Math.PI / 2);
    this.ctx = ctx;
   
  }

  updateAngle() {
    this.angle += Math.PI / 2;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    // if (this.rotation) {
    //   this.angle += 1;
    // }
    // this.ctx.strokeStyle = "lightgrey";
    //this.ctx.strokeStyle = "white"
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.rect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();

    
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 15;
    this.ctx.beginPath();
    this.ctx.arc(
      (0 - this.size / 2) / this.size,
      0 - this.size / 2,
      this.size / 4,
      0,
      Math.PI,
      false
    );
    //this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = "white";
    //this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 20;
    this.ctx.beginPath();
    this.ctx.lineTo(-this.size / 4, -this.size / 4);
    this.ctx.arc(
      0 - this.size / 2,
      (0 - this.size / 2) / this.size,
      this.size / 4,
      Math.PI * 1.5,
      Math.PI / 2,
      false
    );
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();
    
    
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(
      this.size / 2,
      this.size / 2,
      this.size / 2,
      Math.PI,
      -Math.PI / 2,
      false
    );
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.fillStyle = "white"
    this.ctx.beginPath();
    this.ctx.lineTo(this.size / 4, this.size / 4);
    this.ctx.arc(
      this.size / 2,
      this.size / 2,
      this.size / 4,
      Math.PI,
      -Math.PI / 2,
      false
    );
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();


    this.ctx.restore();

  }
}
