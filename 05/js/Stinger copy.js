class Stinger {
  constructor(x, y, ctx, cpt) {
    this.x = x;
    this.y = y;
    //this.angle = angle;
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
    // this.radius = radius
    //this.lineToX = lineToX
    //this.lineToY = lineToY

  }


  draw(x, y) {

    if (this.distance(this.position, this.target) > 0.001) this.move();

    this.ctx.save();
    

    this.ctx.translate(this.position.x-100, this.position.y+150)
    //this.ctx.rotate(this.angle);

    
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(100, 750);
    this.ctx.lineTo(70, 650);
    this.ctx.lineTo(130, 650);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.restore();


  }


  resetAndGo(x, y) {
    this.t = 0;

    this.target = {
      x,
      y,
    };

  }

  
  move() {
    this.t += this.speed;
    const ease = Easing.bounceOut(this.t);
  
    this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
  }
  
  distance(target, goal) {
    return Math.sqrt(
      Math.pow((target.x - goal.x)/2, 2) + Math.pow(target.y - goal.y, 2)
    );
  }




}






