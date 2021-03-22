const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = "Play";
var trashCan, trashImg
function preload() {
    trashImg = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(600, 500);
    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(300, 480, 600, 20);
    leftSide = new whiteBox(370, 420, 20, 100);
    World.add(world, leftSide);

    trashCan = createSprite(410,400,100,20);
    trashCan.addImage(trashImg);
    trashCan.scale = 0.45;

    bottomSide = new whiteBox(410, 460, 100, 20);
    World.add(world, bottomSide);
    rightSide = new whiteBox(450, 420, 20, 100);
    World.add(world, rightSide);
    paper = new Paper(70, 400, 10);
    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background("pink");
    ground.display();
//  leftSide.display();
//  bottomSide.display();
//  rightSide.display();
    paper.display();
    drawSprites();
}
function keyPressed() {
    if (keyCode === UP_ARROW && gameState === "Play") {
        Matter.Body.applyForce(paper.body, paper.body.position, { x: 12, y: -11 })      
        gameState = "End";
    }
}





