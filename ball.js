class Ball {
    constructor(x,y,r){
        var options = {
            restitution: 0.8
        }

        this.body=Bodies.circle(x,y,r,options)
        this.radius=r
        World.add(world,this.body)

    }

    display(){
        var pos = this.body.position
        ellipseMode ("center")
        fill ("orange")
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}