class Pendulum{

constructor(x,y,color){

var options={

    restitutuion:1,
    slop:1,
    inertia:Infinity

}

this.body=Bodies.rectangle(x,y,40,40,options)
this.x=x;
this.y=y;
this.color=color;
World.add(world,this.body)

}
display(){
var angle=this.body.angle
var pos=this.body.position;
push();
translate(pos.x,pos.y)
rotate(angle);
fill(this.color)
ellipse(0,0,60,60)
pop();

}

}