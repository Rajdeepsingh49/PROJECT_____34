
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var bob1,bob2,bob3,bob4;
var world, engine;
var pos;
var canvas;
var ground1,rope1,rope2,rope3,rope4,rope5;
var mConstraint;


function preload()
{
	image = loadImage("sprites/BG3.jpg");
}

function setup() {
	canvas = createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  


	let canvasmouse = Mouse.create(canvas.elt);
   canvasmouse.pixelRatio = pixelDensity();
   let options ={
       mouse:canvasmouse 
   };
   mConstraint = MouseConstraint.create(engine, options);
   World.add(world,mConstraint);


	//Create the Bodies Here.
	bob1 = new Bob(250,350,50);
	bob2 = new Bob(300,350,50);
	bob3 = new Bob(350,350,50);
	bob4 = new Bob(400,350,50);
	bob5 = new Bob(450,350,50);
	
	
	rope1 = new Rope(bob1.body,{x:250,y:200});
	rope2= new Rope(bob2.body,{x:300,y:200});
  	rope3= new Rope(bob3.body,{x:350,y:200});
  	rope4= new Rope(bob4.body,{x:400,y:200});
  	rope5= new Rope(bob5.body,{x:450,y:200});


	
  
}


function draw() {
  rectMode(CENTER);
 
  Engine.update(engine);
  background(image);
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}









