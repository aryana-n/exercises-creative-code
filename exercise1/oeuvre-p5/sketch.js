
let pos1 = 30

let x = 0;
let y = 0;
let a = 0;
let b = 0;

let speed = 1;
let wayX = 1; 
let wayY = 1;


function setup() {
  createCanvas(470, 300)

  noStroke()
  angleMode(DEGREES)

}

function draw() {
  background('black')

 
  push()
  if (y > 70) {
    wayY = -1;
  } 
  else if ( y < 0) {
    wayY = 1
  }

  translate(0, y)

  fill('#ebe9dc')
  ellipse(pos1, pos1, 40)
  
  fill('#638695')
  ellipse(80, pos1, 40)

  fill('#638695')
  ellipse(130, pos1, 40)
  pop()


  fill('#ebe9dc')
  rect(170, 45, 80, 40)

  fill('#ebe9dc')
  rect(0, 122, 80, 40)

  push()

  if (x > 45) {
    wayX = -1;
  } 
  else if ( x < 0) {
    wayX = 1
  }

  translate(x, 0)

  fill('#ebe9dc')
  ellipse(310, pos1, 40)

  fill('#ebe9dc')
  ellipse(360, pos1, 40)

  fill('#ebe9dc')
  ellipse(310, 80, 40)

  fill('#ebe9dc')
  ellipse(360, 80, 40)

  fill('#ebe9dc')
  ellipse(310, 130, 40)

  fill('#ebe9dc')
  ellipse(310, 180, 40)
  pop()


  fill('#c94c43')
  rect(375, 115, 46, 59)

  push()
  rotate(180)
  fill('#8f9391')
  rect(145, 142, 46, 59)
  pop()

  fill('#ebe9dc')
  ellipse(100, 200, 40)

  fill('#ebe9dc')
  rect(390, 210, 80, 40)

  fill('#ebe9dc')
  ellipse(310, 250, 40)

  fill('#ebe9dc')
  ellipse(260, 250, 40)
 
  fill('#ebe9dc')
  rect(20, 200, 40, 10)

  fill('#ebe9dc')
  rect(20, 220, 40, 10)

  fill('#ebe9dc')
  rect(20, 240, 40, 10)

  fill('#ebe9dc')
  rect(20, 260, 40, 10)

  x = x + speed * wayX;
  y = y + speed * wayY;
 
  
}