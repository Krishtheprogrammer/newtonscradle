class Ball{
    constructor(x,y,r){
    var options={
        restitution:1,
        isStatic:false,
        density:0.7,
        friction:0
    }
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("black")
        ellipse(0,0,this.r,this.r)
        pop()
    }
}