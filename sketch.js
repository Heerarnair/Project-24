const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber1 = new Rubber(1000, 500, 50);
    stone1 = new Stone(500, 550);
    iron1 = new Iron(200, 550)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
 
}