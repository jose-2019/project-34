const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint

var engine,world;

function setup(){

   engine= Engine.create();
    world=engine.world;

    createCanvas(900,600);

bob1=new Pendulum(200,300,"red");
bob2=new Pendulum(260,300,"green")
bob3=new Pendulum(320,300,"blue")
bob4=new Pendulum(380,300,"lavender")
bob5=new Pendulum(440,300,"pink")

sling1=new Sling(bob1.body,{x:200,y:100})
sling2=new Sling(bob2.body,{x:260,y:100})
sling3=new Sling(bob3.body,{x:320,y:100})
sling4=new Sling(bob4.body,{x:380,y:100})
sling5=new Sling(bob5.body,{x:440,y:100})

}

function draw(){
    background(0);
    Engine.update(engine);
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged(){

    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
    
    }
