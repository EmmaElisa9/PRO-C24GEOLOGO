const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane;
var hule1,hule2,hule3,hule4,hule5,hule6, hierro, piedra1,piedra2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    hule1 = new Rubber(200,500,30);
    hule2 = new Rubber(300,500,30);
    hule3 = new Rubber(350,500,30);
    hule4 = new Rubber(400,450,30);
    hule5 = new Rubber(450,450,30);
    hule6 = new Rubber(450,500,30);
    piedra1 = new Stone(700,500,50,50);
    piedra2 = new Stone(800,500,50,50);
    hierro = new Hierro(1000,500,100,100);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    hule1.display();
    hule2.display();
    hule3.display();
    hule4.display();
    hule5.display();
    hule6.display();
    piedra1.display();
    piedra2.display();
    hierro.display();

    
 
}