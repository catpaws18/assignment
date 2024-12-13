//This is a game called Jatra. It's based on a festival in Nepal where the person has to get to the top of a tree that is placed on a chariot. Once the person gets to the top, they throw a disc to predict the future of the country. Inspired by this festival, I made my own version for the game. 


let newCanvas=false;
let person;
let crows=[];
let foods=[];
let foodsnum=3;
let crowsnum=7;
let personlife=3;
let personimage;
let tree;
let treeImage;
let foodImage;
let lightningImage;
let futureImage;
//let sound;
let sceneNum=1; 
let xCoordinates=[]; 
let yCoordinates=[]; 
let rain =[];
let rain1image, rain2image, rain3image;
let bckgrnd;
let chariot2;
let xLocation=[];
let yLocation=[]; 
let numSegments=200; 
let time;
let maxtime=30000;
let restart=false;
let fallingemojis=[]; 
let keyEmojiX, keyEmojiY; 
let radio;
let drops=[];
let x=300;
let y=370; 

function preload() {
  personimage = loadImage('../images/person.png');
  treeImage = loadImage('../images/tree.png');
  foodImage = loadImage('../images/food.png');
  lightningImage = loadImage('../images/lightning.png');
  // futureImage = loadImage ("future.png");
  //sound = loadSound('sound.mp3');
  rain1image = loadImage('../images/rain1.png');
  rain2image = loadImage('../images/rain2.png');
  rain3image = loadImage('../images/rain3.png');
   bckgrnd = loadImage('../images/bckgrnd.png');
  chariot2 = loadImage('../images/chariot2.png');
  PARTI = loadImage ('../images/part1.png'); 
  PARTII = loadImage ('../images/part2.png'); 
  PARTIII = loadImage ('../images/part3.png'); 

}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  imageMode(CENTER)

  
  person= new Person();
  tree= new Tree(width / 4);

  for (let i = 0; i < crowsnum; i++) {
    crows.push(new Crow(random(0,width),random(0,height-80)));
  }

  for (let i = 0; i < foodsnum; i++) {
    foods.push(new Food(random(0,width),random(0,height)));
  }

  keyEmojiX= 250;
  keyEmojiY= 45;
  
  time= millis();
  
  for (let i = 0; i < numSegments; i++){
    xLocation[i]= 0; 
    yLocation[i]= 0; 
  }
  
  for (let i = 0; i < 50; i++){
    xCoordinates.push(random(0,300));
    yCoordinates.push(random(100,300)); 
    
     // for (let i = 0; i < 50; i++) {
    rain.push(new Rain());
  }

  for (let i = 0; i < 100; i++) {
        drops.push(new RainDrop(random(width), random(-500, -50)));
    }
  
   radio = createRadio (); 
  radio.position (50,70);
  
  radio.option ('I');
  radio.option ('II');
  radio.option ('III'); 
  radio.style ('width', "100px")
  radio.elt.style.color = 'white';
  
}

function draw() {
  
  switch(sceneNum) {
    case 1:
        scene1();
        break;
    case 2:
        scene2();
        break;
    case 3:
        scene3();
        break;
 }
  
}
  
  function scene1(){
  background(220);
  if (personlife <= 0) {
    gameOver();
    noLoop(); 
    return;
  }
     fill(0);
    textAlign(CENTER, CENTER);
    textFont('Courier New', 9);
    text("Move your mouse to the key for a hint...",380,40);
  
  let adjustedMouseX = mouseX - width / 2;
  
  drawChariot(200,400,adjustedMouseX);
  drawPagoda();

  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text('🗝️',keyEmojiX,keyEmojiY);

  if (dist(mouseX,mouseY,keyEmojiX,keyEmojiY) < 20) {
    fill(0);
    textAlign(CENTER, CENTER);
    textFont('Courier New', 13);
    text("Take this key to unlock your future!",keyEmojiX, keyEmojiY - 20);

    if (mouseIsPressed || dist(mouseX, mouseY, keyEmojiX, keyEmojiY) < 20) {
      fallingemojis.push(createVector(random(0, width), 0));
    }
  }

  if (dist(person.x, person.y, keyEmojiX, keyEmojiY) < person.w / 2 + 10) {
    // if (!newCanvas) {
      sceneNum = 2; 
      newCanvas = false;
    }

  handlefallingemojis();
  tree.display();
  
  person.body();
  person.move();
  for (let i = 0; i < crowsnum; i++) {
    crows[i].body();
    crows[i].move();
    crows[i].checkCollision();
  }
  for (let i = 0; i < foods.length; i++) {
    foods[i].body();
    foods[i].move();
    foods[i].checkCollision(i);
  }
  countpersonlife();
  
}

function countpersonlife() {
  for (let i = 0; i < personlife; i++) {
    fill(255, 0, 0);
    ellipse(i * 20 + 20, height - 20, 15, 15);
  }
}

function drawPagoda() {
  let pagodaX = 490;
  let pagodaY = 550;
  let pagodaWidth = 300;
  let pagodaHeight = 70;
  let numLayers = 7;

  for (let i = 0; i < numLayers - 1; i++) {
    fill(16, 15, 99); 
    rect(pagodaX - pagodaWidth / 2, pagodaY, pagodaWidth, pagodaHeight);
    pagodaY -= pagodaHeight;
    pagodaWidth /= 2;
  }
  fill(16, 15, 99);
  triangle(pagodaX - pagodaWidth, pagodaY + 70, pagodaX, pagodaY - pagodaHeight, pagodaX + pagodaWidth, pagodaY + 70);

  let doorX = pagodaX - pagodaWidth / 2;
  let doorY = pagodaY + 6 * pagodaHeight;
  let doorWidth = 5;
  let doorHeight = 70;
  let numPanel = 5;

  stroke(16, 100, 89);
  strokeWeight(2);

  for (let i = 0; i < numPanel; i++) {
    rect(doorX + i * doorWidth * 0.5, doorY, doorWidth, doorHeight);
  }
  noStroke();
}

function drawChariot(x, y, adjustedMouseX) {
  
  push();
  translate(x, y);

  fill(0, 100, 50);
  rectMode(CENTER);
  rect(0, 0, 200, 90);
  drawWheel(-70, 40, adjustedMouseX, true);  
  drawWheel(70, 40, adjustedMouseX, false);  

  drawEmoticon(-40, -30, adjustedMouseX, true);
  drawEmoticon(40, -30, adjustedMouseX, false);
  pop();
}

function drawWheel(offsetX, offsetY, adjustedMouseX, isFlower) {
  push();
  translate(offsetX, offsetY);

  rotate(adjustedMouseX / 100);

  fill(0);
  ellipse(0, 0, 50, 50);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(isFlower ? '🌸' : '🌸', 0, 0);

  pop();
}

function drawEmoticon(offsetX, offsetY, adjustedMouseX, isFlower) {
  push();
  translate(offsetX, offsetY);

  if (isFlower) {
    rotate(adjustedMouseX / 100);
  } else {
    rotate(-adjustedMouseX / 100);
  }


  fill(0);
  textAlign(CENTER, CENTER);
  textSize(26);
  text(isFlower ? '🏵️🏵️' : '🏵️🏵️', 0, 0);

  pop();
}

function handlefallingemojis() {
  fill(0, 100, 100);

  for (let i = 0; i < fallingemojis.length; i++) {
    textSize(3);  
    textAlign(CENTER, CENTER);
    text('♦️', fallingemojis[i].x, fallingemojis[i].y);
    fallingemojis[i].y += 2;

    if (fallingemojis[i].y > height) {
      fallingemojis.splice(i, 1);
      i--;
    }
  }
}

class Person {
  constructor() {
    this.x = width / 2.2;
    this.y = height - 30;
    this.w = 30;
    this.h = 30;
    this.onTree = false;
  }

  body() {
    imageMode(CENTER);
    image(personimage, this.x, this.y, this.w + 10, this.h + 10);
  }

  move() {
    if (keyIsDown(38)) { // Up arrow key
      if (this.onTree) {
        this.y -= 3;
        if (this.y < 0) this.y = 0;
      } else {
        this.y -= 3;
      }
    }

    if (keyIsDown(40)) { // Down arrow key
      if (this.onTree) {
        this.y += 3;
        if (this.y > height - this.h) this.y = height - this.h;
      } else {
        this.y += 3;
      }
    }

    this.onTree = this.x > tree.x - tree.w && this.x < tree.x + tree.w;
  }
}

class Tree {
  constructor(x) {
    this.x = x + 100;
    this.w = 400;
    this.h = 600; //height of the tree
  }

  display() {
    imageMode(CENTER);
    image(treeImage, this.x, height - this.h / 2.0, this.w, this.h); 
  }
}

class Crow {
  constructor(x, y) {
    this.x = x + 10;
    this.y = y + 10;
    this.w = 20;
    this.h = 20;
  }

  body() {
    imageMode(CENTER);
    image(lightningImage, this.x, this.y, this.w + 100, this.h + 100);
  }

  move() {
    this.x -= 2;
    if (this.x < 0) {
      this.x = width; 
    }
  }

  checkCollision() {
    if (
      person.x + person.w / 2 > this.x - this.w / 2 &&
      person.x - person.w / 2 < this.x + this.w / 2 &&
      person.y + person.h / 2 > this.y - this.h / 2 &&
      person.y - person.h / 2 < this.y + this.h / 2
    ) {
      person.y = height - 50;
      personlife--;
    }
  }
}

class Food {
  constructor(x, y) {
    this.x = x + 10;
    this.y = y + 10;
    this.w = 20;
    this.h = 20;
  }

  body() {
    imageMode(CENTER);
    image(foodImage, this.x, this.y, this.w + 100, this.h + 100);
  }

  move() {
    this.x -= 4; 
    if (this.x < -this.w) {
      this.x = width;
    }
  }

  checkCollision(i) {
    if (
      person.x+ person.w / 2 > this.x - this.w / 2 &&
      person.x - person.w / 2 < this.x + this.w / 2 &&
      person.y + person.h / 2 > this.y - this.h / 2 &&
      person.y - person.h / 2 < this.y + this.h / 2
    ) {
      personlife++;
      person.y = person.y - 50;
    }
  }
}

function gameOver() {
  background(0); 
  fill(255); 
  textSize(50);
  textAlign(CENTER, CENTER);
  text(" 👾 Game Over 👾 ", width / 2, height / 2);
  noLoop(); 
//}
  


}

function scene3() {
createCanvas(500, 500);
  background(0);
  

  
  if (restart){
    clear();
    background(255); 
    newCanvas = true; 
    noLoop(); 
  }

  
  let val = radio.value();
  if (val === 'I') {
    image(PARTI, width / 2, height / 2, PARTI.width/2, PARTI.height/2);
  } else if (val === 'II') {
    image(PARTII, width / 2, height / 2, PARTII.width/2, PARTII.height/2);  
  } else if (val === 'III') {
    image(PARTIII, width / 2, height / 2, PARTIII.width/2, PARTIII.height/2);  
  }
}

function scene2(){

  createCanvas(500, 500); 
  image(bckgrnd, 250,250, width,height); 
  if (restart){
    clear();
    background(255); 
    newCanvas = true; 
    noLoop(); 
  }
  
   fill(0);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("People have been waiting in rain to see the chariot. Drag your mouse around the path!",x,y,200);
  text("Drag your chariot into the blue square to unlock your future...",200,470,300)
  
  for (let i = 0; i < drops.length; i++) {
        drops[i].update();
        drops[i].display();
  }
  
  if (millis()-time>maxtime){
    fill(233, 245, 66); 
  }else{
    fill(0)
  }
  noStroke();
  rect(370,420,20,20);
  

   for (let i = 0; i < rain.length; i++) {
    rain[i].drawRain();
    rain[i].moveRain();
  }
  
for (let i = 0; i < 30; i++){
    
    if(i % 2 == 0){ 
  
// people movement
    image(rain1image,xCoordinates[i]+50,yCoordinates[i]+50,80,80)
      image(rain2image,xCoordinates[i]+50,yCoordinates[i]+50,80,80)
      image(rain3image,xCoordinates[i]+50,yCoordinates[i]+50,80,80)
  }
}
  xLocation[numSegments] = mouseX; 
  yLocation[numSegments] = mouseY; 
  
  
  for (let i = 0; i < numSegments; i++){
    xLocation[i] = xLocation[i+2]; 
    yLocation[i] = yLocation[i+2]; 
   
    if (i > 0){
    line(xLocation[i], yLocation[i], xLocation[i-1], yLocation[i-1])
  }
  else{
    image(chariot2,xLocation[i],yLocation[i],150,200)
  }
}
  let chariotX = xLocation[0];
  let chariotY = yLocation[0];
  
 if (millis() - time > maxtime && 
      chariotX + 50 > 370 && chariotX < 370 + 50 &&
      chariotY + 50 > 420 && chariotY < 420 + 50) { 
   sceneNum = 3; 
   newCanvas = false;
  }
}

class Rain {

  constructor() {
    this.x = random(0, width/4 ); 
    this.y = random(height/2, height);
    this.speed = random (-0.5, 0.5);
    // 
    this.images = int(random(1, 4)); 
  }

  drawRain() {
    if (this.images === 1) {
      image(rain1image, this.x, this.y, 80, 80); 
    } else if (this.images === 2) {
      image(rain2image, this.x, this.y, 80, 80);
    } else if (this.images === 3) {
      image(rain3image, this.x, this.y, 80, 80); 
    }
  }

  moveRain() {
    this.x += this.speed; 
    this.y += this.speed; 
    
    if (this.x >= width) {
      this.x = 0; 
    }
    if (this.y >= width) {
      this.y = height/2; 
    }
  }
  
}

class RainDrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = random(10, 20);  
        this.speed = random(4, 10);  
    }
    update() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = random(-500, -50);
            this.x = random(width);
        }
    }

    display() {
stroke(255); 
line(this.x, this.y, this.x, this.y + this.length);
    }
}

