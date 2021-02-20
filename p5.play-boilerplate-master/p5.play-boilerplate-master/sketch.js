var MBox, FBox;


function setup() {
  createCanvas(800,400);
MBox = createSprite(400, 200, 50, 50);
FBox = createSprite(300, 100, 50, 50);
}

function draw() {
  background("green");  
  MBox.x=mouseX;
  MBox.y=mouseY;
if(MBox.x-FBox.x < MBox.width/2+FBox.width/2
  && FBox.x-MBox.x < MBox.width/2+FBox.width/2  &&
  MBox.y-FBox.y < MBox.height/2+FBox.height/2
  && FBox.y-MBox.y < MBox.height/2+FBox.height/2
  ){
MBox.shapeColor="red";
FBox.shapeColor="red";
}
else{
  MBox.shapeColor="grey";
FBox.shapeColor="grey";
}




  drawSprites();
}