const pixelRatio = window.devicePixelRatio;
let monCanvas;
let mesOutils;

let radius = 10;
let angle = 0;
let sizeR = Math.random() * 200 + 10;
let sizeV = Math.random() * 100 + 10;

function start() {
  monCanvas = document.getElementById("canvas");
  monCanvas.width = (window.innerWidth - 60 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 60 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");
  monCanvas.style.backgroundColor = "black"

  radius = window.innerHeight - 200;

  animate();

}

function animate() {
 //mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);
  dessine();
  requestAnimationFrame(animate);
}

function dessine() {
  let x = monCanvas.width / 2;
  let y = monCanvas.height / 2;

  let posX = x + Math.cos(angle * (Math.PI / 85)) * radius;
  let posY = y + Math.sin(angle * (Math.PI / 90)) * radius;

  // outer ellipse
  mesOutils.lineWidth = 3;
  mesOutils.strokeStyle = "white";
  mesOutils.fillStyle = "black";
  mesOutils.beginPath();
  mesOutils.arc(
    posX,
    posY, 
    Math.abs(sizeR * Math.cos(angle * (Math.PI / 180) * 10)), 
    0, 
    2 * Math.PI, 
    false
    );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // inner ellipse
  mesOutils.lineWidth = 3;
  mesOutils.strokeStyle = "white";
  mesOutils.fillStyle = "black";
  mesOutils.beginPath();
  mesOutils.arc(
    x + Math.cos(angle * (Math.PI / 360)) * 60,
    y + Math.sin(angle * (Math.PI / 180)) * radius, 
    Math.abs(sizeV * Math.cos(angle * (Math.PI / 180) * 10)), 
    0, 
    2 * Math.PI, 
    false
    );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  angle += 0.5;

}


window.onload = () => {
  start();
};
