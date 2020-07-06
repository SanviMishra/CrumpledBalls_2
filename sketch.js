//var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageBody;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;
var rect1 ,rect2,rect3;
var paperball1;
//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650,width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	paperball1=new Paperclass(250,500,70);

	rect1 = new  Dustbin (550,530,90,110);
	//rect2 = new  Dustbin (740,600,20,80);
	//rect3 = new  Dustbin (685,640,100,20);

	Engine.run(engine);
	
}


function draw() {
  
  background(230,230,230);
 //draw ground using rect. 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    //ellipseMode(RADIUS);
    //ellipse(20,20);
   rect1.display();
  // rect2.display();
  // rect3.display();
   paperball1.display();
 
}
function keyPressed() {
	
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:60,y:-60});
	   
		}
		
   }


