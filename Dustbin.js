class Dustbin{
    constructor(x,y,width,height){
       var options ={
           isStatic:true
        }
        this.dustbin=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x, y,width,height,options);
        this.width=width;
         this.height=height;
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        
        //rotate(angle);
        //fill("red");
        image(this.dustbin,pos.x,pos.y,this.width, this.height);
        //rectMode(CENTER);
        //rect(pos.x,pos.y, this.width, this.height);
        pop();

      }
    }
