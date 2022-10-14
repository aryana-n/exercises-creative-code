const pixelRatio = window.devicePixelRatio;
let monCanvas;
let mesOutils;

let pos1 = 30


function setup() {
  monCanvas = document.getElementById("ecal");

  monCanvas.width = 470 //* pixelRatio
  monCanvas.height = 300 //* pixelRatio

  mesOutils = monCanvas.getContext("2d");
  monCanvas.style.backgroundColor = "black"

  draw();
}

function draw() {

  mesOutils.save()
  mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height)

  // premier cercle en noir
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    pos1,
    pos1,
    10 * pixelRatio,
    0,
    2 * Math.PI 
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // prochain cercle, en bleu
  mesOutils.strokeStyle = '#638695';
  mesOutils.fillStyle = '#638695';
  mesOutils.beginPath();
  mesOutils.arc(
    80,
    pos1,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // dessine un autre cercle, en bleu
  mesOutils.strokeStyle = '#638695';
  mesOutils.fillStyle = '#638695';
  mesOutils.beginPath();
  mesOutils.arc(
    130,
    pos1,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // rectangle near cercle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    170,
    45,
    40 * pixelRatio,
    20 * pixelRatio
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // rectangle en blanc below
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    0,
    122,
    40 * pixelRatio,
    20 * pixelRatio
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //part1 grid style white circle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    310,
    pos1,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //part2 grid style white circle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    360,
    pos1,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //part3 grid style white circle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    310,
    80,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //part4 grid style white circle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    360,
    80,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //part5 grid style white circle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    310,
    130,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //part6 grid style white circle
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    310,
    180,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // rectangle nears circles grid red
  mesOutils.strokeStyle = "#c94c43";
  mesOutils.fillStyle = "#c94c43";
  mesOutils.beginPath();
  mesOutils.rect(
    375,
    115,
    23 * pixelRatio,
    28 * pixelRatio
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // rectangle near rect1 in grey
  mesOutils.strokeStyle = "#8f9391";
  mesOutils.fillStyle = "#8f9391";
  mesOutils.beginPath();
  mesOutils.rect(
    145,
    142,
    23 * pixelRatio,
    28 * pixelRatio
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //cercle blanc near grey rect
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    100,
    200,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // rectangle en blanc below
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    390,
    210,
    40 * pixelRatio,
    20 * pixelRatio
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  //cercle bottom 
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    310,
    250,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // prochain cercle 
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.arc(
    260,
    250,
    10 * pixelRatio,
    0,
    2 * Math.PI
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // little rect1
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    20,
    200,
    20 * pixelRatio,
    5 * pixelRatio 
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // little rect2
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    20,
    220,
    20 * pixelRatio,
    5 * pixelRatio 
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // little rect3
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    20,
    240,
    20 * pixelRatio,
    5 * pixelRatio 
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  // little rect3
  mesOutils.strokeStyle = "#ebe9dc";
  mesOutils.fillStyle = "#ebe9dc";
  mesOutils.beginPath();
  mesOutils.rect(
    20,
    260,
    20 * pixelRatio,
    5 * pixelRatio 
  );
  mesOutils.stroke();
  mesOutils.fill();
  mesOutils.closePath();

  requestAnimationFrame(draw);
  mesOutils.restore()
}

// attente que tous les éléments soient chargés
// utilisation d'une fonction anonyme en callback
// --> pas de nom de fonction car pas besoin de la réutiliser
window.onload = () => {
  setup();
};
