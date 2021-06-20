class stone{
    constructor(x,y,width,height){
        var options ={
         restitution:0.8,
         density:12,
         friction:0.9
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
    }
    display(){
     var p=this.body.position;
     var ang=this.body.angle;
     
     push();
     translate(p.x,p.y);
     rotate(ang);
     rectMode(CENTER);
     strokeWeight(3);
     stroke('white');
     fill('violet');
    rect(0,0,this.width,this.height);
     pop();
    }
}
