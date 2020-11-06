class Slingshot {
    constructor (bodyX, location) {
        var options ={
            bodyA:bodyX,
            pointB:location,
            length:15,
            stiffness:0.04
        }
        this.sling = Constraint.create (options);
        World.add (world, this.sling);

        this.location = location
    }

    display() {
        if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.location;
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        }
     }
    fly() {
        this.sling.bodyA = null

        }


} 