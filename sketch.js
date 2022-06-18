
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.x = 300
    box.y = 100
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x = 100
    box.y = 300
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.x = 100
    box.y = 100
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.x = 300
    box.y = 300
  }

  drawSprites();
}

