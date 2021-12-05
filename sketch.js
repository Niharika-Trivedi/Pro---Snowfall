const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var bg, bgImg, snowflake, snowflakeImg; 

function preload (){
  bgImg = loadAnimation ("snow2.jpg","snow3.jpg");
  snowflakeImg = loadAnimation ("snow4.webp", "snow5.webp")
}
function setup() {
  var canvas = createCanvas (1200,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create;
  World = engine.world;
}

function draw() {
  background(255,255,255);
  Engine.update (engine);  
  drawSprites();
}