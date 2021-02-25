const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(400 , 220 , 50 , 17);

    // top 
    block1 = new Block(400 , 400 , 20 , 20);
    block1.shapeColor = "black";
    // middle
    block2 = new Block(400 , 350 , 20 , 20);
    block2.shapeColor = "white";
    block3 = new Block(300 , 350 , 20 , 20);
    block3.shapeColor = "black";
    block4 = new Block(450 , 350 , 20 , 20);
    block4.shapeColor = "white";
    // final
    block5 = new Block(400 , 300 , 20 , 20);
    block5.shapeColor = "black";
    block6 = new Block(300 , 300 , 20 , 20);
    block6.shapeColor = "white";
    block7 = new Block(450 , 300 , 20 , 20);
    block7.shapeColor = "black";
    block8 = new Block(500 , 300 ,20 ,20);
    block8.shapeColor = "white";
    block9 = new Block(250 , 300 , 20 , 20);
    block9.shapeColor = "black";
}

function draw(){
    background("red");

    Engine.update(engine);

    text("Drag the hexagonal shapes and release it towards the blocks");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
}