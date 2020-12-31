
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1800, 900);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground= new Ground(200,850,3500,20);

Mangotree=new tree(1050,850);

stone=new Stone(100,600,30);

mango1=new mango(1000,130,30,50);
mango2=new mango(1100,150,30,50);
mango3=new mango(1200,200,30,60);
mango4=new mango(900,340,50,50);
mango5=new mango(1000,300,40);

boy=new Boy(300,650,200,200);

slingshot=new SlingShot(stone.body,{x:80,y:500})


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
  width: 1200,
  height: 700,
  wireframes: false
  }
});


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  
detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);

  ground.display();
  Mangotree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  boy.display();
  slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
      slingshot.attach(stone.body)
  }
}

function detectcollision(lstone,lmango){

    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

    if(distance< lmango.r+lstone.r){

      Matter.Body.setStatic(lmango.body,false); 

}

}



