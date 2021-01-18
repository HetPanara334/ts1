const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;  
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    // backgroundImg = loadImage("sprites/bg.png");
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,500,310,20);
    
    platform = new Ground(950,300,310,20);

    // level 1 row 1
    box1 = new Box(710,490,70,70);
    box2 = new Box(635,490,70,70);
    box3 = new Box(560,490,70,70);
    box4 = new Box(485,490,70,70);
    //level 1 row 2
    box5 = new Box(690,350,70,70);
    box6 = new Box(605,350,70,70);
    box7 = new Box(520,350,70,70);
    //level 1 row 3
    box8 = new Box(550,210,70,70);
    box9 = new Box(640,210,70,70);
    //level 1 row 4
    box10 = new Box(600,100,70,70);
    
    //level 2 row 1
    box11 = new Box(1060,290,70,70);
    box12 = new Box(985,290,70,70);
    box13 = new Box(910,290,70,70);
    box14 = new Box(835,290,70,70);
    //level 2 row 2
    box15 = new Box(1040,130,70,70);
    box16 = new Box(955,130,70,70);
    box17 = new Box(865,130,70,70);
    // level 2 row 3
    box18 = new Box(900,70,70,70);
    box19 = new Box(990,60,70,70);
    // level 2 row 4
    box20 = new Box (950,10,70,70);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon, {x: 100, y: 200});


}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
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
     box17.display();
     box18.display();
     box19.display();
     box20.display();
    
     slingShot.display();
    ground.display();
    platform.display();
    
    imageMode(CENTER)
    image(polygonImg,polygon.position.x, polygon.position.y,40,40)
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}