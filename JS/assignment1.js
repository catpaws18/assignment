function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
}

function draw() {
  background(122, 185, 222);
  noStroke();
  
  //firstbody 
  push()
  fill (214, 196, 180)
  ellipse(303, 265, 80, [200])
  ellipse(305, 320, 150, [100])
  fill(247, 235, 246)
  ellipse (303, 265, 50, [100])
  pop()
  

  ellipse(600/2, 150, 100, [90])
  fill(219, 205, 193)
  
  
  //greyellipseright

  push()
  translate(350,150)
  rotate(60)
  ellipse(0,0,100,50)
  pop()

  //pinkellipse
  push()
  translate(350,150)
  rotate(60)
  fill(245, 220, 243)
  ellipse(0,0,80,30)
  pop()
  
  //greyellipseleft
  push()
  translate(250,150)
  rotate(120)
  ellipse(0,0,100,50)
  pop()
  
  //pinkellipseleft
  push()
  translate(250,150)
  rotate(120)
  fill(245, 220, 243)
  ellipse(0,0,80,30)
  pop()
  
  //eyes 
  push()
  fill(38, 29, 74)
  ellipse(285,140,20,20)
  pop()
  
  //smalleyes
  push()
  fill(245, 242, 240)
  ellipse(285,142,6,6)
  fill(245, 242, 240)
  ellipse (287,136,3,3)
  pop()
  
   //eyesleft
  push()
  fill(38, 29, 74)
  ellipse(310,140,20,20)
  pop()
  
  //smalleyesleft
  push()
  fill(245, 242, 240)
  ellipse(310,142,6,6)
  fill(245, 242, 240)
  ellipse(310,136,3,3)
  pop()
  
  
  //brownnose
  push()
  fill(99, 32, 32)
  triangle(299,165,289,155,309,155)
  pop()

  
  //rightleg
  push()
  translate (260,330)
rotate(130)
  fill (235, 225, 216)
ellipse (0,0,50,100)
  fill (214, 205, 199)
  ellipse (0,0,30,70)
  pop()
  
  
  //leftleg
  push()
  translate (350,330)
rotate(230)
  fill (235, 225, 216)
ellipse (0,0,50,100)
  fill (214, 205, 199)
  ellipse (0,0,30,70)
  pop()
  
  //rightupperarm
  push()
  translate (255,230)
rotate(212)
  fill (235, 225, 216)
ellipse (0,0,22,90)
  pop()
  
  
  //leftupperarm
  push()
  translate (345,230)
rotate(150)
  fill (235, 225, 216)
ellipse (0,0,22,90)
  pop()

  //bunnyhouse
  push()


  fill (69, 235, 47)
  ellipse (500,100,250,250)
  ellipse (400,40,150,100)
  
  
   fill (37, 69, 32)
  ellipse (500,100,170,250)
  ellipse (420,40,130,100)
  ellipse (530,40,130,100)
  
  //forest 
  fill (87, 41, 41)
  ellipse (500,150,60,60)
  ellipse (520,150,60,60)
  ellipse (520,160,120,60)
  ellipse (500,200,150,50)
 
  fill(6, 8, 6)
  
  //grounddigging
ellipse (500,200,90,30)
  ellipse (500,150,3,3)
  ellipse (490,150,7,5)
  ellipse (490,160,5,5)
  ellipse (495,170,3,3)
   ellipse (500,180,3,3)
  ellipse (550,169,5,5)
  ellipse (550,167,5,5)
  ellipse (545,170,3,3)
  ellipse (510,170,5,5)
  ellipse (520,168,3,3)
  ellipse (525,167,3,3)
  ellipse (515,159,5,5)
  
  
  fill (82, 62, 62)
  ellipse (500,200,40,10)
  pop()

  
}