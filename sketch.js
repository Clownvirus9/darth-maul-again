var DarthmaulIMG, Darthmaul, ScimitarIMG, Scimitar, SpaceIMG, Space;
var Darthmaulbody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	DarthmaulIMG=loadImage("darth maul.png");
	ScimitarIMG=loadImage("sith.png");
    SpaceIMG=loadImage("star wars space.jpg")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	Space=createSprite(400,350,0,0);
	Space.addImage(SpaceIMG);
	Space.scale = 2;

	Darthmaul=createSprite(width/2, 80, 10,10);
	Darthmaul.addImage(DarthmaulIMG);
	Darthmaul.scale=0.2;

	Scimitar=createSprite(width/2, 200, 10,10);
	Scimitar.addImage(ScimitarIMG);
	Scimitar.scale=0.3;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	Darthmaulbody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.5, isStatic:true});
	World.add(world, Darthmaulbody);
	
    //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Darthmaul.x= Darthmaulbody.position.x 
  Darthmaul.y= Darthmaulbody.position.y 
  keyPressed();
  
  drawSprites();
 

}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    
	Matter.Body.setStatic(Darthmaulbody,false)
  }
}



