const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,height,500,20);
    ground = new Ground(200,height,800,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    box5 = new Box(810,160,70,70);

    slingshot = new Slingshot(polygon.body, {x:200, y:100});

}

function draw(){
    Engine.update(engine);
  
    box1.display();
    box2.display();

    box3.display();
    box4.display();

    box5.display();

    ground.display();

    slingshot.display();
}

function mouseDragged () {
    Matter.Body.setPosition (polygon.body, {x:mouseX, y:mouseY})
} 

function mouseReleased () {
    slingshot.fly()
}