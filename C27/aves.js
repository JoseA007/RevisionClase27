class aves extends claseBase{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.image = loadImage("Sprites/bird.png")
        this.image2 = loadImage("Sprites/smoke.png")
        this.trayectory = []
    }

    display(){
        //this.body.position.x = mouseX
        //this.body.position.y = mouseY
        super.display();
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x,this.body.position.y]
            this.trayectory.push(position)
        }
        for(var i=0; i < this.trayectory.length; i ++){
            image(this.image2,this.trayectory[i][0],this.trayectory[i][1]);
        }
    }
}