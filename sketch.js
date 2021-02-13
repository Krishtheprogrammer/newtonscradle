
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1;
var ball1,ball2,ball3,ball4,ball5;
function preload()
{
	
}

function setup() {
	createCanvas(800,640);


	engine = Engine.create();
	world = engine.world;
    diameter=40;
	roof=new Ground(width/2,height/4,width/4,20)
	startx=400
	starty=600
	//Create the Bodies Here.
    ball1=new Ball(startx-diameter*2,starty,diameter);
    ball2=new Ball(startx-diameter,starty,diameter);
    ball3=new Ball(startx,starty,diameter);
    ball4=new Ball(startx+diameter*2,starty,diameter);
	  ball5=new Ball(startx+diameter,starty,diameter);
    rope1=new Rope(ball1.body,roof.body,-diameter*2,0);
    rope2=new Rope(ball2.body,roof.body,-diameter*1,0);
    rope3=new Rope(ball3.body,roof.body,0,0);
    rope4=new Rope(ball4.body,roof.body,+diameter*2,0);
    rope5=new Rope(ball5.body,roof.body,+diameter*1,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-40})
  }
}

