let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.01;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.5;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  fly();
  drawSprites();

}

function fly(){
  if(keyDown("up")){
    lander.position.y-=20
  }

  if(keyDown("down")){
    lander.position.y+=10
  }

  if(keyDown("left")){
    lander.position.x-=10
  }

  if(keyDown("right")){
    lander.position.x+=10
  }

}
