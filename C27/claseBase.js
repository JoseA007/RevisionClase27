class claseBase{
    constructor(x,y,w,h,a){
        var opciones = { 
            restitution: 0.6,
            friction: 4,
            density: 0.8
          }
        this.body = Bodies.rectangle(x,y,w,h,opciones)
        this.w = w;
        this.h = h
        this.image = loadImage("Sprites/base.png")
        World.add(world, this.body)
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
    
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop();
    }
    }