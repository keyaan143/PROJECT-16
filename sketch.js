//creating gameStates
var PLAY;
var gameState;
var END;
var score;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground  , groundImage;
var edges;
var bananaGroup;
var STONEGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundImage = loadImage("imge.png");
 
}



function setup() {
createCanvas(600,400);
  
   
  
  //creating groups
    bananaGroup=createGroup();
    obstacleGroup=createGroup();
  
monkey = createSprite(200,253, 5, 5);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;

ground = createSprite(300, 290, 800, 20);
ground.velocityX = -4;
ground.addAnimation = ("ground" , groundImage);
  
bananaGroup = createGroup();
obstacleGroup = createGroup();


   

   
}


function draw() {
  
   if(gameState===PLAY){
  //call banan function
   banan();
   
   
   if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
   }
   }
  

   
 
}
  
function banan(){
  if(World.frameCount%100===0){
    banana = createSprite(750, 300, 5, 5);
    banana.addAnimation("banana", bananaImage);
    banana.y=Math.round(random(  120,200));
    banana.velocityX=-4 ;
    banana.setLifetime=50;
    banana.scale = 0.05;
    
    bananaGroup.add(banana); 
    
      

    } 
  
  
  if(World.frameCount%300===0){
    obstacle = createSprite(600, 253, 5, 5);
    obstacle.addAnimation("obstacle", obstaceImage);
    obstacle.y=Math.round(230);
    obstacle.velocityX=-4 ;
    obstacle.setLifetime=50;
    obstacle.scale = 0.3;
    
    obstacleGroup.add(obstacle); 
    
      

    } 
 
  
  
  

  
background("white");
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("survival Time: "+ survivalTime, 100, 50);

monkey.collide(ground);
//creates edges
edges = createEdgeSprites()
monkey.collide(edges);
ground.x=ground.width/2;
  
if (keyDown("space")) {
 monkey.velocityY = -10 
}
  
monkey.velocityY = monkey.velocityY + 0.9;
  

  

  
drawSprites();
  

}





