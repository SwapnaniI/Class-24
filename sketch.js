
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var bin1,bin2,bin3;

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Bodies 

	ground=new Ground();
	paper=new Paper(20);
	bin1=new Bin(600,670,198,10,true);
	bin2=new Bin(494.5,635,10,80,true);
	bin3=new Bin(705.5,635,10,80,true);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
//Display
  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  //Calling functions
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode===UP_ARROW){
    //Limiting the movement
	 if(paper.body.position.x<440){
	  Matter.Body.applyForce(paper.body,paper.body.position,{y:-3.6,x:1.2})
	 }
	 else{
		Matter.Body.applyForce(paper.body,paper.body.position,{y:0,x:0})
	 }
		

	}
	
	
  }

