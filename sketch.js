
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var start
var roof1;
var startBobPositionX;
var startBobPositionY;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof1=new Roof(width/2,height/4,width/7,20);

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(World.mouseX,World.mouseY);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope2.display();
  rope3.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}



