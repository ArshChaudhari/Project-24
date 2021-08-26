
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var playerbase, computerbase;
var player, coplayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  var halfwidth = width/2;
 
   //Create Player Base and Computer Base Object
  playerbase = new PBase(halfwidth/2+halfwidth,500,210,150);
	computerbase = new CBase(halfwidth/2,500,210,150)
  
  coplayer = new CPlayer(halfwidth/2,350,80,180);
  player = new PPlayer(halfwidth/2+halfwidth,350,80,180);
 }

function draw() {
  background(180);

  // Title
  fill("#FFFF");
  textAlign("center");

  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerbase.display();
  computerbase.display();

   //display Player and computerplayer
  player.display();
  coplayer.display();

  Engine.update(engine);
}
