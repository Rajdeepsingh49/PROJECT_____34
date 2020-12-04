class Bob{
    constructor(x,y,r){

        var ops={
            isStatic:false,
            restitution:1.2,
            frictionair:0,
            density:1
        }
    

        this.x=x;
        this.y=y;
        this.r=r;
    
        this.body = Bodies.circle(x,y,r/2,ops);
        World.add(world,this.body);
    } 

    
    
display(){
    
    var pos = this.body.position;
    push ()
    translate(pos.x,pos.y);
    rotate (this.body.angle)
    fill (212,175,30);
     stroke("white");
     strokeWeight(2);
    ellipseMode(CENTER);
    ellipse(0,0,this.r,this.r)
    pop ()
}
}
