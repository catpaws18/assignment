let img
function preload(){
  img = loadImage("lotus.png")
  
}
function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(220);
  
  let move = map(mouseX, 0, width, -10, 10); //using map to move the lotus forward
  let move1 = map(mouseX, 0, width, -20, 20); //using map to move the lotus backward 

  tint(0);
  image(img, 50+move, 30,400,400)
  
   for (let i = 0; i < 1000; i += 6) {
      for (let j = 0; j < height; j += 30) {
    strokeWeight(3);
    stroke(57, 36, 214);
    line(i, 0, i, height);
      stroke(224, 160, 40);
      line(i, j, i + 5, j + 10);
    }
  }

  tint(255);
  image(img, 30-move1, 40,400,400)
  
    for (let x=0; x<1000; x+=6){

strokeWeight (3);
  stroke(224, 160, 40)

 if (mouseIsPressed == true){
 translate(500,60)
        rotate (360)
        fill(255)
        text("lotus",0,0,50,20)
}else{
  line (x-mouseX,0,x-mouseX,height);
  
}
  
}
}