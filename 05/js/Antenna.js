class Antenna {
  constructor(x, y, radius, ctx, cpt) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    //this.width = width
    //this.height = height\
    this.cpt = cpt
    this.originRadius = radius;
    this.targetRadius = radius;

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
    // this.lineToX = lineToX
    // this.lineToY = lineToY


  }


  draw(x, y) {
    if (Math.abs(this.targetRadius - this.radius) > 0.01) this.scale();
    else this.radius = this.targetRadius;
    
    if (this.distance(this.position, this.target) > 0.001) this.move();
    
    this.ctx.save();

    this.ctx.translate(this.position.x-170, this.position.y-300)
    
    // circle 1
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(
      100, 
      100,
      this.radius,
      0,
      Math.PI * 2
    );
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();

    // cirlce 2
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(
      240, 
      100,
      this.radius,
      0,
      Math.PI * 2
    );
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(130, 255);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(240, 100);
    this.ctx.lineTo(210, 255);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.restore();

  }



  resetAndGo(x, y, radius) {
    this.t = 0;
    // this.origin = {
    //   x: this.target.x,
    //   y: this.target.y,
    // };
    this.target = {
      x,
      y
    };
    this.originRadius = this.radius;
    if (this.radius == 20) {
      this.targetRadius = 5;
    } else {
      this.targetRadius = 20;
    }
  }

  

  move() {
    this.t += this.speed;
    const ease = Easing.bounceOut(this.t);
  
    this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
  
  }

  scale() {
    //on incrémente t par la vitesse
    this.t += this.speed;
    //on calcule le facteur d'interpolation suivant le type de easing
    const ease = Easing.expoInOut(this.t);

    
    this.radius = Math.abs(
      this.originRadius + (this.targetRadius - this.originRadius) * ease
    );
    
  }
  
  distance(target, goal) {
    return Math.sqrt(
      Math.pow((target.x - goal.x)/2, 2) + Math.pow(target.y - goal.y, 2)
    );
  }




}






