var background;
var Bow;
var redBalloon;
var arrowImg;

var blueBalloon;

var greenBalloon;

var pinkBalloon;


function preload() {
  //load your images here 
  backgroundimg
    = loadImage("background0.png");

  bow
    = loadImage("bow0.png");
  
  arrowImg=loadImage("arrow0.png");

  redballoon
    = loadImage("red_balloon0.png");


  blueballoon
    = loadImage("blue_balloon0.png");

  greenballoon
    = loadImage("green_balloon0.png");

  pinkballoon
    = loadImage("pink_balloon0.png");


}

function setup() {
  createCanvas(600, 600);

  //add code here
  background = createSprite(0, 0, 600, 600);
  background.addImage("runing", backgroundimg);
  background.scale = 2.5;
  background.x = background.width / 2

  Bow = createSprite(550, 220, 10, 10);
  Bow.addImage("busting", bow);
  Bow.scale = 1



  for (var i = 70; i < 390; i = i + 60) {
    redBalloon = createSprite(50, i, 1, 1);
    redBalloon.addImage(redballoon);
    redBalloon.scale = 0.1;
  }

  for (var i = 130; i < 320; i = i + 60) {
    blueBalloon = createSprite(140, i, 1, 1);
    blueBalloon.addImage(blueballoon);
    blueBalloon.scale = 0.1;
  }

  for (var i = 110; i < 390; i = i + 60) {
    greenBalloon = createSprite(100, i, 1, 1);
    greenBalloon.addImage(greenballoon);
    greenBalloon.scale = 0.1;
  }

  for (var i = 180; i < 290; i = i + 70) {
    pinkBalloon = createSprite(180, i, 1, 1);
    pinkBalloon.addImage(pinkballoon);
    pinkBalloon.scale = 1.2;
  }


}

function draw() {

  background.velocityX = -3;

  if (background.x < 0) {
    background.x = background.width / 2;

  }

  Bow.y = mouseY;
 if(keyDown("space")){
     
  var temp_arrow  =  createArrow();  
   temp_arrow.addImage(arrowImg);
   temp_arrow.y = Bow.y;
 }
   

  drawSprites();
}

function createArrow() {
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}