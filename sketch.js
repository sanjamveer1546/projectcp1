
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color("yellow")

  ground = Bodies.rectangle(width/2, height, width, 10 , {isStatic:true} );
   World.add(world, ground);
   
   

    bin1= new Dustbin(700,275,200,10);
	 bin2= new Dustbin(600,230,10,100);
	 bin3= new Dustbin(800,230,10,100);
      trash =new Trash(100,255,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  trash.display();
  drawSprites();
 
}

  
function keyPressed() {
    if (keyCode === UP_ARROW) {
       // Look at the hints in the document and understand how to make the package body fall only on
       Matter.Body.applyForce(trash.body,trash.body.position,{x:145,y:-145});
     }
   }


