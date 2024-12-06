let motionX = 0;
let speed = 1;
let motionY1 = 0; 
let motionY2 = 0; 
let bloodspeed1 = 2; 
let bloodspeed2 = 3;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(39, 86, 227);
  drawbody();
  drawcloth();
  drawbuttons(284,150);
  drawbuttons (284,190);
  drawbuttons (284,230);
  drawdodohead();
  drawdodobeak();
  blood();
  drawfeet1 ();
  drawfeet2 ();
  lefthand();

  fill(6, 6, 8);
  textSize (10);
  text("Sailing in the sea of sorrow...", 450,390);
  
  //if (mouseX > 270 && mouseX < 300 && mouseY > 120 && mouseY < 170) {

  motionX = motionX + speed;
  if (motionX>30 || motionX<0) {
    speed *= -1; 
  }
}

function drawcloth(){
  fill(255);
  rect(275,141,20,100);
}

function drawbuttons(x,y) {
  fill(0);
  ellipse(x,y,10,10);
}

function drawbody(){
  fill(214, 24, 27);
  rect(270, 120, 30, 50); // neck
  fill(232, 181, 207);
  rect(213, 141, 150, 100); // body 
}

function blood() {
  fill(214, 24, 27);
  ellipse(285, 125+motionY1, 10, 20); // blood drop1
  motionY1 += bloodspeed1; 
  ellipse(295, 130+motionY2, 5, 15); // blood drop1
  motionY2 += bloodspeed2; 
    
    if (motionY1 > height) {
    motionY1 = 0; 
  if (motionY2 > height) {
    motionY2 = 0; 
  }
}
}

function drawdodohead() {
  fill(255);
  noStroke();
  
  push();
  translate(430, 180);
  rotate(120);
  fill(232, 181, 207); // hand 
  rect(0, 0, 20, 80); // hand 
  pop();
  
  push();
  translate(405 + motionX, 195);
  rotate(120);
  noStroke();
  fill(247, 244, 242);
  ellipse(0,0, 50, 40); // neckofhead
  ellipse(10, -50,100, 110); // head
  fill(45,209,224);
  ellipse(15,-60,30,30); // eyes
  fill(0);
  ellipse(15, -60, 20, 10); // inner eyes
  pop();
}

function drawdodobeak() {
  fill(255, 153, 51);  
  push();
  translate(405+motionX, 195);
  beginShape();  // beak
  curveVertex(25, 5);  
  curveVertex(85, 5);  
  curveVertex(95, -10); 
  curveVertex(105, 5);  
  curveVertex(100, 25);  
  curveVertex(75, 20);  
  curveVertex(25, 10); 
  endShape();
  pop();
}

function drawfeet1(){
push();
fill(145, 138, 122);
  translate (213,270);
  rotate (60);
  ellipse (5,-25,30,70);

push()
  rotate (280);
fill (72, 74, 71);
  ellipse (0,40,30,70);
  fill(97, 77, 32)
  ellipse (0,40,10,40);
  pop()
pop()
  
}

function drawfeet2 (){
  push()
  fill(145, 138, 122);
  translate (300,270);
  rotate (60);
  ellipse (5,-25,30,70);

push()
  rotate (280);
fill (72, 74, 71);
  ellipse (0,40,30,70);
  fill(97, 77, 32)
  ellipse (0,40,10,40);
  pop()
  pop()
  
}

function lefthand() {
  fill(255);
  noStroke();
  
  push();
  translate(220, 140);
  rotate(60);
  fill(232, 181, 207); // hand 
  rect(0, 0, 20, 80); // hand 
  pop();
  
  push();
  translate(190, 165);
  rotate(220);
  noStroke();
  fill(92, 90, 90);
  ellipse(10, -50,50, 40); // piratehand2
  fill(135, 132, 132);
  ellipse(10, -70,5, 30);
  pop();
  
}