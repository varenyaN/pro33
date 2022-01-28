const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var  bg;
function preload() {
  bg = loadImage("snow1.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  web1= new Web(600,600,200,200);
 GR=new Ground (600,height,1200,20);
}

function draw() {
  background(bg); 
  Engine.update(engine);

  GR .display();
  web1.display();
  drawSprites();
}