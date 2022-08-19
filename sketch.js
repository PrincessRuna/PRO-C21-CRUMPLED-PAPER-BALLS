
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var r = 40;

var ground;
var leftside;
var rightside;
var wall;

function setup() {
	createCanvas(900, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_option={
		//isStatic:false,
		restitution:0.3,
		//friction:0,
		//detsity:1.2
	}

	ball = Bodies.circle(200 , 100 , r/2 ,ball_option)
	World.add(world , ball)

	ground = new Ground(200,490,10000,20)
	leftside = new Ground(590,460,20, 280)
	wall = new Ground(890,460,20, 10000)
	rightside = new Ground(850,460,20, 280)


	//Engine.run(engine);
  
}


function draw() {
//background(22)
//rectMode(CENTER);
 background(0);
 fill("white")
  ellipse( ball.position.x , ball.position.y , r)
  ground.show()
  leftside.show()
  rightside.show()

Engine.update(engine)
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05});
  
	}
}



