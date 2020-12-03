var mr ,fr;



function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 100, 50, 80);
 fr.shapeColor = "green"
 fr.debug = "true";
 mr = createSprite(400, 800,80, 30);
 mr.shapeColor = "green"
 mr.debug = "true";
 fr.velocityY = 5;
 mr.velocityY = -5;
}

function draw() {
  background(0);
  
  
bounce(mr,fr);
  drawSprites();
}

function bounce(object1,object2){

  if(object2-object1 < object2.width/2 + object1.width/2
    &&object1.x - object2.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX *(-1);
      object2.velocityX = object2.velocityX*(-1);
    }
    if(object2.y- object1 .y < object2.width/2 + object1 .width/2
    &&object1 .y- object2.y < object2.width/2 + object1 .width/2){
      object1 .velocityY = object1 .velocityY*(-1);
      object2.velocityY = object2.velocityY*(-1);
    
    }


}