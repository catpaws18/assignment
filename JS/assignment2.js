let x = 200
let y = 200 
let xs = 150
let ys = 150 
let xt = 250
let yt = 150
let mx = 300
let my = 300
let t;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background (255,255,0)
  let faceSize = map (mouseX,0,width, 20, 100);

  //eyesize 
  let eyeSize = map (mouseY, 0, height, 20,50)
  
  ellipse (width/2,height/2, faceSize , faceSize)
  
  push()
  r=random(0,100);
  g=random (0,100);
  b=random(0,100);
  fill (r,g,b)
  ellipse (xs,ys, eyeSize, eyeSize)
  ellipse (xt, yt, eyeSize,eyeSize)
  pop()
}

  function mousePressed (){
    t = random (0,255)
    fill (t)
}

  
