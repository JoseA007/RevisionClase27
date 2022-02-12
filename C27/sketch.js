const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine
var world
var piso1
var piso2
var box1
var box2
var box3
var box4
var box5
var log1
var log2
var log3
var log4
var cerdito1
var cerdito2
var ave1
var bg = "Sprites/bg.png"
var backgroundIMG
var resortera1
var score = 0

function preload(){
  getbackground();
}

function setup() {
  createCanvas(1200,750);

  engine = Engine.create();
  world = engine.world
  
  piso1 = new piso(600,750,1200,50)
  
  box1 = new box(700,600,70,70)
  box2 = new box(900,600,70,70)
  
  cerdito1 = new cerditos(800,590,50,50)
  
  log1 = new log(800,580,250,PI/2)

  box3 = new box(700,570,70,70)
  box4 = new box(900,570,70,70)
  
  cerdito2 = new cerditos(800,560,50,50)
  
  log2 = new log(800,550,250,PI/2)
  
  box5 = new box(800,540,70,70)
  
  log3 = new log(750,450,150,PI/7)
  log4 = new log(850,450,150,-PI/7)
  
  ave1 = new aves(200,300,50,50)

  piso2 = new piso(150,600,250,250)

  resortera1 = new resortera(ave1.body,{x:200,y:300})
}

function draw(){
  if (backgroundIMG)
  background(backgroundIMG);
  textSize(50)
  fill("black")
  text("Puntuación " + score, 30, 60)
  Engine.update(engine)
  
  piso1.display(); 
  box1.display();
  box2.display();
  cerdito1.display();
  log1.display();
  box3.display();
  box4.display();
  cerdito2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  ave1.display();
  piso2.display();
  resortera1.display();

  
}

async function getbackground(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Mexico_City")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13)
  console.log("Hora"+hour)
  if(hour>=06 && hour<=19){
    bg = "Sprites/bg.png"
  }
  else{
    bg = "Sprites/bg2.jpg"
  }
  backgroundIMG = loadImage(bg)
}

function mouseDragged(){
  Matter.Body.setPosition(ave1.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
  resortera1.fly()
}

function keyPressed(){
  if(keyCode === 32){
    ave1.trayectory = []
    Matter.Body.setPosition(ave1.body,{x: 200,y: 300})
    resortera1.attach(ave1.body)
  }
}