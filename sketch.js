
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  // creating the monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  // creating ground
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(ground.x);
   obstaclesGroup = createGroup();
   FoodGroup = createGroup();
  
}


function draw() {
background(255);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  // jumping the monkey
  if(keyDown("space")&& monkey.y>314){
    monkey.velocityY = -21;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
   console.log(monkey.y)
    monkey.collide(ground);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  text("Survival Time = " + survivalTime,100,50);
  Banana();
  Obst();
  drawSprites();
}
function Banana(){
  if (frameCount % 80 === 0){
    banana =createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-7;
    banana.setLifetime = 200;
    banana.scale=0.09;
    FoodGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}
function Obst(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(600,326,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.10;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}




