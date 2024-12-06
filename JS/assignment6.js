let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
let cookingdays = ['Sunday', 'Monday', 'Wednesday', 'Thursday'];

let angle= 0; 
let direction= 1; 
let degree= 10;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  textAlign(LEFT, CENTER); 
}

function draw (){
  background(245, 228, 195);
  
  drawdays (20,50);
  let potSun = 100;
  let spatulaSun = potSun-100;
  
  let potMon = 220;
  let spatulaMon = potMon-100;
  
  let potWed = 520;
  let spatulaWed = potWed-100; 
  
  let potThurs = 670;
  let spatulaThurs = potThurs-100; 
  
  //call drawpot and drawspatula 
  drawPot (300,potSun);
  drawSpatula (300,spatulaSun);
  drawPot (300,potMon);
  drawSpatula (300,spatulaMon); 
  drawPot (300,potWed);
  drawSpatula (300, spatulaWed); 
  drawPot (300,potThurs);
  drawSpatula (300,spatulaThurs); 
  
}

//draw pot shape 
function drawPot(x, y) {
  fill(30, 129, 176);
  beginShape();
  vertex(x-80, y); 
  vertex(x-100, y-50); 
  vertex(x+100, y-50); 
  vertex(x+80, y); 
  endShape(CLOSE); 
}

//draw spatula shape 
function drawSpatula (x,y){
  push();
  translate (x,y);
  angle +=direction * 0.3; //spatula movement back and forth
  if (angle > degree || angle < -degree) {
    direction *= -1; 
  }
  rotate(angle);
  fill(234, 182, 118);
  rect(-5, 0, 10, 40); // Spatula handle
  rect(-15, 40, 30, 10); // Spatula head
  pop(); 
  
}

//put days on the left side 
function drawdays(x,y){
  
  textSize(16);
  for ( let  i=0; i < days.length; i++){
  let textdays = y + (i*150);
  
  fill(0);
  text (days[i],x,textdays);
                                    
}
}
