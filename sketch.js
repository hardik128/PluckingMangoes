
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var boyImage,gameState="onsling"
function preload()
{
   boyImage = loadImage("sprites/boy.png")
   treeImage = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1200, 500);
	/*boy = createSprite(200,420,50,160)
	boy.addImage(boyImage)
	boy.scale=0.1
    boy.debug = true;*/
	engine = Engine.create();
	world = engine.world;
	/*var render = Render.create({
		 element: document.body, engine: engine, 
		   options: { 
			 width: 1200, height: 500, wireframes: false 
			} 
		}
		);  */

	base = new Ground(600,490,1200,20)
	mango1 = new Mango(880,140,22)
	mango2 = new Mango(800,150,22)
	mango3 = new Mango(830,210,27.5)
	mango4 = new Mango(750,220,27.5)
	mango5 = new Mango(950,210,22)
	mango6 = new Mango(860,70,22)
	mango7 = new Mango(720,150,27.5)
	mango8 = new Mango(1100,220,19)
	mango9 = new Mango(1000,160,19)
	mango10 = new Mango(1080,150,22) 
	mango11=new Mango(980,100,24.5)
	mango12=new Mango(950,50,19)
	stone=new Stone(238,332,15)
	 
	slingshot = new SlingShot(stone.body,{ x: 238, y: 332})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine)
  
  image(boyImage,200,260,200,300) 
  image(treeImage,650,10,500,500)
  
  mango2.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  slingshot.display();
  base.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  drawSprites();
  console.log(gameState)
  if (gameState==="launched"){
	  textSize(50)
	  fill(0,200,200)
	  text("Press SPACE To Play Again",180,50)
  }
}

function mouseDragged(){
if (gameState==="onsling"){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}	
}


function mouseReleased(){
	if (gameState==="onsling"){
	slingshot.fly();
	gameState="launched"
	}
}

function detectCollision(stoneObj1,mangoObj1){
	 mangoBodyPosition=mangoObj1.body.position
	 stoneBodyPosition=stoneObj1.body.position

	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if (distance<=mangoObj1.r+stoneObj1.r){
		 Matter.Body.setStatic(mangoObj1.body,false)
	 }

	}


function keyPressed(){
	if ((gameState==="launched")&&(keyCode === 32)){
		Matter.Body.setPosition(stone.body,{x:238,y:332})
		stone.body.speed=0;
		gameState="onsling"
		slingshot.attach(stone.body);
	}
}	