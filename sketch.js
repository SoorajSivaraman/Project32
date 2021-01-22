const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, 
    block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, 
    block23, block24, block25, stand1, stand2, polygon, slingShot;
var polygonReleased = false;
var spaceClicked = false;
var score = 0;
var shotCount = 0;
var BGRDImage = "black";
function preload()
{
    getBGRDColour();
}

function setup() {
	  createCanvas(1300, 600);
	  engine = Engine.create();
    world = engine.world;
    ground = new Ground(650,600,1300,20);
    block1 = new Block(670, 300, 30, 40, "red");
    block2 = new Block(640, 340, 30, 40, "cyan");
    block3 = new Block(670, 340, 30, 40, "cyan");
    block4 = new Block(700, 340, 30, 40, "cyan");
    block5 = new Block(610, 380, 30, 40, "lightpink");
    block6 = new Block(640, 380, 30, 40, "lightpink");
    block7 = new Block(670, 380, 30, 40, "lightpink");
    block8 = new Block(700, 380, 30, 40, "lightpink");
    block9 = new Block(730, 380, 30, 40, "lightpink");
    block10 = new Block(580, 420, 30, 40, "blue");
    block11 = new Block(610, 420, 30, 40, "blue");
    block12 = new Block(640, 420, 30, 40, "blue");
    block13 = new Block(670, 420, 30, 40, "blue");
    block14 = new Block(700, 420, 30, 40, "blue");
    block15 = new Block(730, 420, 30, 40, "blue");
    block16 = new Block(760, 420, 30, 40, "blue");
   stand1 = new Ground(670, 445, 240, 10);

    block17 = new Block(1070, 260, 30, 40, "brown");
    block18 = new Block(1040, 300, 30, 40, "yellow");
    block19 = new Block(1070, 300, 30, 40, "yellow");
    block20 = new Block(1100, 300, 30, 40, "yellow");
    block21 = new Block(1010, 340, 30, 40, "green");
    block22 = new Block(1040, 340, 30, 40, "green");
    block23 = new Block(1070, 340, 30, 40, "green");
    block24 = new Block(1100, 340, 30, 40, "green");
    block25 = new Block(1130, 340, 30, 40, "green");
    stand2 = new Ground(1070, 360, 180, 10);
    polygon = new Polygon(250, 370, 20);
    slingShot = new SlingShot(polygon.body, {x:250, y:370});
	  Engine.run(engine);

}

function draw() {
  background(BGRDImage);
  stroke("black");
  fill("white");
  textFont("Lucida Calligraphy");
  textSize(15);
  
 if(score === 250)
{
  background(color(91, 121, 171));
  stroke(color(91, 121, 171));
  fill(color(11, 21, 38));
  textSize(25);
  text("Good Job !! You destroyed both the Pyramids in " + shotCount + " shots !!", 330, 300);
}
else
{
  text("Drag the MOUSE to stretch the catapult and aim at the blocks", 50, 50); 
  text("Release the MOUSE to shoot the Polygon", 50, 100);
  text("Press SPACE Arrow Key to shoot the Polygon again", 50, 150);
  text("Shot Count: " + shotCount, 780, 50);
  text("Score: " + score, 1100, 50);
  detectCollision(polygon, block1);
  detectCollision(polygon, block2);
  detectCollision(polygon, block3);
  detectCollision(polygon, block4);
  detectCollision(polygon, block5);
  detectCollision(polygon, block6);
  detectCollision(polygon, block7);
  detectCollision(polygon, block8);
  detectCollision(polygon, block9);
  detectCollision(polygon, block10);
  detectCollision(polygon, block11);
  detectCollision(polygon, block12);
  detectCollision(polygon, block13);
  detectCollision(polygon, block14);
  detectCollision(polygon, block15);
  detectCollision(polygon, block16);
  detectCollision(polygon, block17);
  detectCollision(polygon, block18);
  detectCollision(polygon, block19);
  detectCollision(polygon, block20);
  detectCollision(polygon, block21);
  detectCollision(polygon, block22);
  detectCollision(polygon, block23);
  detectCollision(polygon, block24);
  detectCollision(polygon, block25);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  stand1.display();
  stand2.display();
  ground.display();
  polygon.display();
  slingShot.display();
}
  

}

function mouseDragged()
{ 
  if(polygonReleased === false)
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
    polygonReleased = true;
    spaceClicked = false;
    shotCount = shotCount + 1;
    slingShot.fly();
}

function keyPressed()
{
	if(keyCode === 32 && spaceClicked === false && polygonReleased === true)
	{
    polygonReleased = false;
    spaceClicked = true;
    Matter.Body.setPosition(polygon.body, {x:250, y:370});
    slingShot = new SlingShot(polygon.body, {x: 250, y: 370});
    slingShot.attach(polygon.body);
	} 
}

function detectCollision(lPolygon, lBlock)
{
	blockBodyPosition = lBlock.body.position;
	polygonBodyPosition = lPolygon.body.position;

	var distance = dist(polygonBodyPosition.x, polygonBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y);
	if(distance <=(lBlock.width + lBlock.height)/2 + lPolygon.r)
	{
    Matter.Body.setStatic(lBlock.body, false);
  }
}

async function getBGRDColour()
{
    var fetchTime = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var fetchTimeJSON = await fetchTime.json();
    var dateTime = fetchTimeJSON.datetime;
    var getHour = dateTime.slice(11, 13);
    if(getHour >= 06 && getHour <= 18)
    {
      BGRDImage = loadImage("dayBGRD.jpg");
    }
    else{
      BGRDImage = loadImage("nightBGRD.jpg");
    }
}