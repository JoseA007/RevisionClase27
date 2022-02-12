class log extends claseBase{
    constructor(x,y,h,a){
        super(x,y,20,h,a)
        this.image = loadImage("Sprites/wood2.png")
        Matter.Body.setAngle(this.body,a)
    }
}