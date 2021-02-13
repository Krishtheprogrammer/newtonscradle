class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
            }
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            var anchour1x = pointA.x;
            var anchour1y = pointA.y;
            var anchour2x = pointB.x+this.offsetX;
            var anchour2y = pointB.y+this.offsetY;
            strokeWeight(2)
            line (anchour1x,anchour1y,anchour2x,anchour2y);
        }
    }
    
