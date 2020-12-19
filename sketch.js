
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var r
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,300,50);
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
}


function draw() {
background(220);
  
  ground.x=ground.width/2;
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
      }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  Obstacles();
  
   //stroke("white");
   //textSize(20);
  //fill("white");
  //text("Score"+score,300,50);
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  drawSprites();
}

function food(){
  if (frameCount%80===0){
    r=Math.round(random(120,200));
    
    banana=createSprite(400,r,40,40);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.1;
    banana.lifeTime = 300;
    
    FoodGroup.add(banana);
    
    }
  }


function Obstacles(){
  if (frameCount%200===0){
    obstacle=createSprite(400,305,80,50);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.3;
    obstacle.lifeTime = 300;
    
    obstacleGroup.add(obstacle); 
  }
}


