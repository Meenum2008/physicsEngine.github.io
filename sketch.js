var sp;
var engine, world;
var object1,ball3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
 
  var ball3_option={
    restitution:0.4
  }
  ball3=Bodies.circle(200,100,10,ball3_option);
  var object1_option={
    isStatic:true
  }
  object1=Bodies.rectangle(200,390,200,20,object1_option);
 
  World.add(world,object1);
  World.add(world,ball3);


  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object1.position.x,object1.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(ball3.position.x,ball3.position.y,20,20);

 
  drawSprites();
}