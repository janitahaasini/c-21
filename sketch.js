
var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  rect1=createSprite(230,600,70,90);
  rect1.shapeColor="red";

  rect2=createSprite(500,500,40,40);
  rect2.shapeColor="purple";


  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect2)){
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    rect2.shapeColor = "purple";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




