const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
var poygon,ground,ground2,slingshot1,polygon_Img;



function preload(){

  polygon_Img=loadImage("polygon.png")
  

}


 
function setup() {
  createCanvas(900,400);



engine=Engine.create();
world=engine.world
Engine.run(engine);

ground=new Ground(600,600,1200,20)
ground2=new Ground(385,300,300,20)

box1=new Box(480,275,30,40)
box2=new Box(300,275,30,40)
box3=new Box(330,275,30,40)
box4=new Box(360,275,30,40)
box5=new Box(390,275,30,40)
box6=new Box(420,275,30,40)
box7=new Box(450,275,30,40)
box8=new Box(330,235,30,40)
box9=new Box(360,235,30,40)
box10=new Box(390,235,30,40)
box11=new Box(420,235,30,40)
box12=new Box(450,235,30,40)
box13=new Box(360,195,30,40)
box14=new Box(390,195,30,40)
box15=new Box(420,195,30,40)
box16=new Box(390,155,30,40)

polygon = Bodies.circle(50,200,20)
World.add(world,polygon)



slingshot1=new SlingShot(this.polygon,{x:100,y:200});


}


function draw() {
  background(56,44,44); 
 // Engine.update(engine)
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  ground2.display()
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();


imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  slingshot1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.poygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}













