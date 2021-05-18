
var ground
var Image1
var player
var Image2,invisibleblock,rock,rockImage
var PLAY=1
var END=0
var gameState = PLAY;
var I2,Image3
var coin,coinImage
var score;
var lizard
var lizardA,background
var reset,resetImage
var score = 0
var ba
function preload(){
  Image2=loadImage("download (1).jpg")
  Image1= loadImage("download (3).png")
  rockimage= loadImage("images (3).png")
  gameplay = loadImage("download.png")
  // resetImage= loadImage("download.png")
  I2=loadImage("download (3).png")
}
 
function setup() {
  createCanvas(1200, 600);
  if(gameState===PLAY){
  background=createSprite(320,200,600,600)
  background.addImage(Image2)
  background.scale = 4.5
  I2=createSprite(100,200,20,20)
  I2.addImage(Image1)
  I2 .scale=0.3
  I2.depth=background.depth
  I2.depth+=1
  rockGroup=new Group()
  coinGroup=new Group()
  lizardGroup=new Group()
  resetGroup=new Group()
  //score=0

 // reset = createSprite(300, 200, 20, 20);
  //reset.addImage(resetImage);
 
 // reset.scale =0.2
  //resetGroup.add(reset)
  }
}
 
 
  function draw() {
    //player.y=Image3.y
    //background("white")
    
    if(gameState === PLAY){
    if (background.x < 120){
        background.x = 320;
      }
      background.velocityX=-5

    if(keyDown("up")&& I2.y >= 200) {
          I2.velocityY = -12;
   
      }
 I2.velocityY=I2.velocityY+0.5  
  //reset.visible = false;    
  if (keyDown("space")) {
    Bullet();
  
  }
  if (lizardGroup.isTouching(rockGroup)){
    rockGroup.destroyEach();
    lizardGroup.destroyEach();
    score++
  }
  if (I2.isTouching(rockGroup)){
    gameState=END
  }
  spawnObstacles()

  
  invisible(); 
 
  drawSprites();
  fill("red")
  text ("KILL:"+score,10,30)
  text ("press up ARROW for jump",30,50)
  text("press space for shooting",30,70)

}
if (gameState===END){
  textSize(50)
  fill("red")
  text("GAME OVER",300,300)
}
function invisible(){
  invisibleblock=createSprite(100,500,5,5)
  invisibleblock.width=background.width 
  invisibleblock.visible=false
  I2.collide(invisibleblock);
}
function spawnObstacles() {
    if (frameCount % 200 == 0) {
      var rock = createSprite(600,Math.round(random(20, 370)), 10, 10);
      
      rock.velocityX = -7;
      rock.addImage(rockimage);
      rock.scale=0.3       
      rock.lifetime = 300;
      rock.debug = true
      rockGroup.add(rock);
    }
}

function Bullet() {
  var arrow= createSprite(10,100, 60, 10);
  //arrow.addImage(arrowImage);
  arrow.x = 100;
  arrow.y=I2.y;
  arrow.velocityX = +4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
lizardGroup.add(arrow)
}
  }