class cerditos extends claseBase{
    constructor(x,y,w,h){
        super(x,y,w,h);
        this.image = loadImage("Sprites/enemy.png")
        this.visibility = 255   
    }
    display(){
        if(this.body.speed < 5){
            super.display();
        }
        else{
            World.remove(world, this.body)
            push()
            this.visibility -= 5
            tint(255,this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.w, this.h)
            pop()
        }
    }
    score(){
        if(this.visibility < 0 && this.visibility > -1000){
            score++
        }
    }
}