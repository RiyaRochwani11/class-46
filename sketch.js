const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
ground = new Ground (windowWidth/2,windowHeight-10,windowWidth,50);
ball= new Ball (windowWidth/2+80,windowHeight-70,70);

slingShot = new SlingShot(ball.body,{x:windowWidth/2+90,y:windowHeight-200})
basket1= new Basket (windowWidth/2-200,windowHeight/2-100,70,20)
  
}

function draw() {
  background("blue");  
  drawSprites();
  ground.display();
  ball.display();
  slingShot.display();
  basket1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}