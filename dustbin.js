class Dustbin{
    constructor(x,y,width,height,){
        var options={
            isStatic:true
        }
        this.image=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();
    }
}