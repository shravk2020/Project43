var hr;
var mn;
var sc;
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0,0,0);  

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  translate(200,200);
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  translate(200,200);
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  translate(200,200);
  rotate(hrAngle);
  stroke(124, 247, 1);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill();
  translate(200, 200);
  stroke("blue");
  strokeWeight(7);
  arc(0, 0, 300, 300, 0, scAngle);
  stroke("red");
  strokeWeight(7);
  arc(0, 0, 280, 280, 0, mnAngle);
  stroke(124, 247, 1);
  strokeWeight(7);
  arc(0, 0, 260, 260, 0, hrAngle);
}