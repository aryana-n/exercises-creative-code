class Wing {
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


  }


  draw(x, y) {

    if (this.distance(this.position, this.target) > 0.001) this.move();
    
    if (Math.abs(this.targetRadius - this.radius) > 0.01) this.scale();
    else this.radius = this.targetRadius; 

    this.ctx.save();

    this.ctx.translate(this.position.x-300, this.position.y-100)
    
    
    // wing 1
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(100, 100, this.radius, 7.2, 5.4, false);
    this.ctx.lineTo(this.width/2-50, this.height/2+100);
    this.ctx.lineTo(this.width/2-280, this.height/2+260);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    // wing 2
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(500, 100, this.radius, 4, 8.5, false);
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

  resetAndGo(x, y, radius) {
    // if (this.x == this.width / 2, this.y === this.width / 2+250) {
    //   this.target = this.width / 2, this.y === this.width /2 
    // } else {
    //   this.target = this.width / 2, this.y === this.width / 2+250
    // }
    this.t = 0;
    
    // this.origin = {
    //   x: this.target.x,
    //   y: this.target.y,
    // };
    this.target = {
      x,
      y,
    };
    // if (this.origin.y == this.height / 2 + 250) {
    //   this.target = this.height / 2
    // } else {
    //   this.target = this.height / 2 + 250
    // }

    
   
    this.originRadius = this.radius;
    if (this.radius == 200) {
      this.targetRadius = 300;
    } else {
      this.targetRadius = 200;
    }
  }

  // comeBack(x, y) {
  //   this.t = 0;
  //   this.origin = {
  //     x,
  //     y,
  //   };
  //   this.target = {
  //     x: this.target.x,
  //     y: this.target.y
  //   };


  // }

  move() {
    this.t += this.speed;
    const ease = Easing.quintOut(this.t);
  
    //this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
  
  }

  scale() {
    //on incrémente t par la vitesse
    this.t += this.speed;
    //on calcule le facteur d'interpolation suivant le type de easing
    const ease = Easing.bounceOut(this.t);

    
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






