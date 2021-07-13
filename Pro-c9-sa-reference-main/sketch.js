var box;
function setup() {
  createCanvas(1000,1000);
 box = createSprite(500,500,25,25)
  box.shapeColor="cyan"
}

function draw() {
  background("white")

  if(keyDown(LEFT_ARROW)) {
    box.x-=5
  }

  if(keyDown(RIGHT_ARROW)) {
    box.x+=5
  }

  if(keyDown(DOWN_ARROW)) {
    box.y+=5
  }

  if(keyDown(UP_ARROW)) {
    box.y-=5
  }

  drawSprites();
}