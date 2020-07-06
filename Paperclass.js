class Paperclass{

    constructor(x, y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:0.5
        }

        this.body=Bodies.circle(x, y,radius,options);
        this.radius=radius;
         this.ball=loadImage("paper.png");
         
        World.add(world,this.body);
    }
    display(){
        image(this.ball,250,500,70);
        this.ball.scale=4;
        //paper using ellipse instruction
      //ellipse(this.body.position.x,this.body.y,this.radius);
      //ellipseMode(RADIUS);
      // ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

}