var moving ,fixed,rect1,rect2
function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 moving=createSprite(200,300,50,50)

 rect1=createSprite(200,30,80,80)
 rect1.velocityY=3
 rect2=createSprite(200,300,80,80)
 rect2.velocityY=-3
}

function draw() {
  background(255,205,225);  
  drawSprites();

  moving.x=World.mouseX
  moving.y=World.mouseY

 if(isTouching(moving,fixed)){
   moving.shapeColor="red"
   fixed.shapeColor="pink"

 }
 else{
   moving.shapeColor="grey"
   fixed.shapeColor="grey"
 }

 bounceOff(rect1,rect2)
}
