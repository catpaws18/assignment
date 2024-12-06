let speed = 2; 

function setup() {
  createCanvas(600, 600);
  angleMode (DEGREES);
}

function draw() {
  background(250, 222, 145); 
let rectX = 420; 
let rectY = 140; 
let rectWidth1 = 150; 
let rectHeight = 100; 
let rectX1 = 70;
let rectY1 = 370;


  //Clock ellipse 
  
  ellipse (300, 300, 200, 200); 

  let speedup = 10; 
  let speedown = 0.5 ;

let s = millis()/1000; //converting sec to milli  
let newtime = s * speed; 
  
  
let clockhand = newtime * 6 % 360; //moving 360 degrees around the clock 

if (clockhand >= 40 && clockhand < 140){
  newtime = speedup
  fill (219, 57, 98)
  rect (rectX, rectY, rectWidth1, rectHeight)
  textAlign (CENTER,CENTER);
  fill(255);
  text ("Panic Mode!!!", rectX + rectWidth1/2, rectY + rectHeight/2);
  
  
}else {
  newtime = speedown;
  fill (100, 180, 227);
  rect (rectX1,rectY1,rectWidth1,rectHeight);
  textAlign (CENTER, CENTER); 
  fill(255);
  text("** Procrastination Mode ** ", rectX1 + rectWidth1 / 2, rectY1 + rectHeight / 2);
  
}

  push();
  translate (width/2, height/2); 
  rotate (clockhand);  
strokeWeight (2);
  line (0,0,0,-100); //Hand of the clock 
  pop();
  
}

  
