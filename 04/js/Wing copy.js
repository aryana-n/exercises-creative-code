class Wing {
  constructor(x, y, radius, ctx, cpt) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    //this.width = width
    //this.height = height\
    this.cpt = cpt

    this.origin = {
      x: x,
      y: y,
    };
    this.position = { x: x, y: y };
    this.target = {
      x: x,
      y: y,
    };
    this.speed = 0.01;

    this.t = 0;
    this.radius = radius


  }


  draw(x, y) {

    if (this.distance(this.position, this.target) > 0.001) this.move();
    this.ctx.save();

    this.ctx.translate(this.position.x-300, this.position.y-100)
    
    
    // wing 1
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 200, 7.2, 5.4, false);
    this.ctx.lineTo(this.width/2-50, this.height/2+100);
    this.ctx.lineTo(this.width/2-280, this.height/2+260);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    // wing 2
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(500, 100, 200, 4, 8.5, false);
    this.ctx.lineTo(this.width/2+50, this.height/2+100);
    this.ctx.lineTo(this.width/2+280, this.height/2-60);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    // this.ctx.lineWidth = 3;
    // this.ctx.fillStyle = "white";
    // this.ctx.beginPath();
    // this.ctx.arc(100, 100, 200, 0, Math.PI * 2);
    // this.ctx.fill();
    // this.ctx.stroke();
    // this.ctx.closePath();

    this.ctx.restore();

  }

  pos(x, y) {
    this.position = {
      x, 
      y
    };
  }

  resetAndGo(x, y) {
    this.t = 0;
    // this.origin = {
    //   x: this.target.x,
    //   y: this.target.y,
    // };
    // if (this.x == this.width / 2, this.y === this.width / 2+250) {
    //   this.target = this.width / 2, this.y === this.width /2 
    // } else {
    //   this.target = this.width / 2, this.y === this.width / 2+250
    // }
    this.target = {
      x,
      y,
    };
  }

  comeBack(x, y) {
    this.t = 0;
    this.origin = {
      x,
      y,
    };
    this.target = {
      x: this.target.x,
      y: this.target.y
    };


  }

  move() {
    this.t += this.speed;
    const ease = Easing.quintOut(this.t);
  
    this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
  
  }
  
  distance(target, goal) {
    return Math.sqrt(
      Math.pow((target.x - goal.x)/2, 2) + Math.pow(target.y - goal.y, 2)
    );
  }




}






