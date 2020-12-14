
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,300);
monkey = createSprite(100,245,10,10);
  monkey.addAnimation("monkey12",monkey_running);
  monkey.scale=0.12;
  
  ground = createSprite(100,285,1000000,9);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
background("lightgreen")
  
   
  stroke("skyblue");
  fill("blue");
  textSize(20);
  
  survivalTime=survivalTime + Math.round(getFrameRate()/60);
  text("survival Time:"+survivalTime,100,50);
  
  ground.velocityX=-3;
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  spawnfood();
  spawnObstacles();
  
  drawSprites();
}
function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(85,150));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 130 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(261,261));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}



