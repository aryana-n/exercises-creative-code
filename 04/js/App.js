/**
 *  EASING REF:
 *  https://easings.net/#
 */

let cpt = 0
class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.setup();
  }
  
  setup() {
    
    this.mouse = { x: 0, y: 0 };
    let radius = 10;
    this.angle = 0;
    const center = {
      x: (window.innerWidth / 2) * this.pixelRatio,
      y: (window.innerHeight / 2) * this.pixelRatio,
    };

    this.wing = new Wing(100, 100, 200, this.ctx,cpt)

    //EYES
    this.eyes = new Array(
      new Eye(center.x - 100, center.y - 100, 50, this.ctx),
      new Eye(center.x + 100, center.y - 100, 50, this.ctx)
    );

    document.addEventListener("click", this.click.bind(this));
    document.addEventListener("mousemove", this.move.bind(this));

    this.draw();
  }

  click(e) {

    this.wing.resetAndGo(
      e.clientX * this.pixelRatio,
      e.clientY * this.pixelRatio
    );

    
  }

  draw() {
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.lineWidth = 3;
    this.wing.draw();

    // this.ctx.save();
    // this.ctx.lineWidth = 3/5;
    // this.ctx.translate(400 * this.pixelRatio, 180 * this.pixelRatio);
    // this.ctx.scale(5, 5);
    // this.ctx.translate(100, 100);
    // this.ctx.rotate(-115 * Math.PI / 180);
    // this.ctx.translate(-100, -100);

    // this.ctx.fillStyle = "white";
    // this.ctx.beginPath();
    // this.ctx.lineJoin = 'miter';
    // this.ctx.arc(120, 88, 35, 5.74, 3.66, false);
    // this.ctx.bezierCurveTo(100, 55, 122, 10, 120, 20);
    // this.ctx.bezierCurveTo(122, 27.5, 121, 15, 150, 70);
    // this.ctx.fill();
    // this.ctx.stroke();
    // this.ctx.closePath();
    // this.ctx.restore();


    // stinger
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width/2, this.canvas.height/2+650);
    this.ctx.lineTo(this.canvas.width/2-30, this.canvas.height/2+550);
    this.ctx.lineTo(this.canvas.width/2+30, this.canvas.height/2+550);
    this.ctx.fill();
    this.ctx.closePath();

    // body
    this.ctx.save();
    this.ctx.fillStyle = "#FFDA0E";
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 4;
    this.ctx.scale(0.75, 1);
    //this.ctx.translate(x, y);
    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width/2/0.75, this.canvas.height/2+250, 300, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    // head
    this.ctx.save();
    this.ctx.fillStyle = "#F9DD48";
    this.ctx.strokeStyle = "black";
    //this.ctx.scale(0.75, 1);
    //this.ctx.translate(x, y);
    this.ctx.beginPath();
    //this.ctx.roundRect(this.canvas.width/2, this.canvas.height/2, 300, 500, 20)
    this.ctx.arc(this.canvas.width/2, this.canvas.height/2 - 100, 200, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    //antenna
    this.ctx.save();
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    //this.ctx.scale(0.75, 1);
    //this.ctx.translate(x, y);
    this.ctx.beginPath();
    //this.ctx.roundRect(this.canvas.width/2, this.canvas.height/2, 300, 500, 20)
    this.ctx.arc(this.canvas.width/2-70, this.canvas.height/2-450, 20, 0, Math.PI * 2);
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    //this.ctx.scale(0.75, 1);
    //this.ctx.translate(x, y);
    this.ctx.beginPath();
    //this.ctx.roundRect(this.canvas.width/2, this.canvas.height/2, 300, 500, 20)
    this.ctx.arc(this.canvas.width/2+70, this.canvas.height/2-450, 20, 0, Math.PI * 2);
    this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width/2-70, this.canvas.height/2-450);
    this.ctx.lineTo(this.canvas.width/2-50, this.canvas.height/2-290);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width/2+70, this.canvas.height/2-450);
    this.ctx.lineTo(this.canvas.width/2+50, this.canvas.height/2-290);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    // this.ctx.save();
    // this.ctx.strokeStyle = "black";
    // this.ctx.lineWidth = 40;
    // // this.ctx.scale(0.75, 1);
    // this.ctx.beginPath();
    // this.ctx.arc(this.canvas.width/2, this.canvas.height/2+150, 300, 0, Math.PI/3);
    // // this.ctx.fill();
    // this.ctx.stroke();
    // this.ctx.closePath();
    // this.ctx.restore();



    this.eyes.forEach((eye) => {
      eye.draw(this.mouse.x, this.mouse.y);
    });
    requestAnimationFrame(this.draw.bind(this));
  }

  move(e) {
    this.mouse = {
      x: e.clientX * this.pixelRatio,
      y: e.clientY * this.pixelRatio,
    };
  
  }

  dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
}

window.onload = function () {
  new App();
};


