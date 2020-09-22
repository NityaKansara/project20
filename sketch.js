var wall,car;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,80,60,height/2);
}

function draw() {
  background(0); 
  car.velocityX=speed;
  if(isTouching(car, wall)){
    //something happens
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }
  drawSprites();
}

function isTouching(A, B){
  //ALGORITHM TO DETECT COLLISION - isTouching()
  if (A.x - B.x < B.width/2 + A.width/2
      && B.x - A.x < B.width/2 + A.width/2
      && A.y - B.y < B.height/2 + A.height/2
      && B.y - A.y < B.height/2 + A.height/2) {
        //Yes, they are touching
        //Function should return yes - TRUE
        return true;
  }
  else {
        //No, they aren't touching
        //Function should return no - FALSE
        return false;  
  }
}


