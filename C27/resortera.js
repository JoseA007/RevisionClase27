class resortera{
    constructor(bodyA,pointB){
        var opciones = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.resortera1IMG = loadImage("Sprites/sling1.png")
        this.resortera2IMG = loadImage("Sprites/sling2.png")
        this.resortera3IMG = loadImage("Sprites/sling3.png")
        this.pointB = pointB
        this.resortera = Constraint.create(opciones)
        World.add(world,this.resortera)
    }
    attach(body){
        this.resortera.bodyA=body
    }
    fly(){
        this.resortera.bodyA=null
    }
    display(){
        image(this.resortera1IMG,200,275)
        image(this.resortera2IMG,170,275)
        if(this.resortera.bodyA){
            push();
            strokeWeight(3)
            line(this.resortera.bodyA.position.x-20,this.resortera.bodyA.position.y,this.pointB.x-10,this.pointB.y)
            line(this.resortera.bodyA.position.x-20,this.resortera.bodyA.position.y,this.pointB.x+30,this.pointB.y-3)
            image(this.resortera3IMG,this.resortera.bodyA.position.x-30,this.resortera.bodyA.position.y-10,15,30)
            pop()
        }
    }
}