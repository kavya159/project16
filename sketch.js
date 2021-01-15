
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup
var FoodGroup, obstacleGroup
var score,ground
var survivalTime=0;
//var score=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
monkey = createSprite(200,300,20,20)
monkey.addAnimation("jumping",monkey_running)
 monkey.scale=0.15
  ground=createSprite(300,360,600,20)
  ground.velocityX=-5
  bananaGroup= new Group
  obstaclesGroup=new Group
}


function draw() {
  background(200)
  ground.x=ground.width/2
  if (keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12
  }
  
   monkey.velocityY=monkey.velocityY+6
  
  monkey.collide(ground)
  obstaclesGroup.setLifetimeEach(-1);
  bananas();
  obstacles();
  //stroke("white")
 // textSize(20)
  //fill("white")
 // text("score:"+score,400,50)
  
  
  
drawSprites();
 if(obstaclesGroup.isTouching(monkey)){
   obstaclesGroup.setVelocityXEach(0) ;
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1) ;
    bananaGroup.setLifetimeEach(-1);
    survivalTime.visible=false
     stroke("red");
    fill("red");
    textSize(30);
    text("Game Over", 110, 200);
          
    stroke("black");
    fill("black");
    textSize(30);
    text("Monkey is dead", 100, 240);
    ground.velocityX = 0;
   
  } 
 stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50) 
}
function bananas(){
 if (frameCount%80===0){
  var banana=createSprite(300,200,20,20) 
  banana.velocityX=-5 
   banana.y=random(120,200)
   banana.addImage(bananaImage)
   banana.scale=0.2
   banana.lifetime=200
   bananaGroup.add(banana)
   
 } 
  }
function obstacles(){
if(frameCount%300===0) {
 var obstacle=createSprite(300,340,70,70) 
  obstacle.x=Math.round(random(100,500))
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.2
  obstacle.velocityX=-5
  obstacle.lifetime=120
  obstaclesGroup.add(obstacle)
  
  
} 
  
  
  
}




