class piso{
    constructor(x,y,w,h){
        var opcionesPiso = {
            isStatic: true
          }
        
        this.body = Bodies.rectangle(x,y,w,h,opcionesPiso)
        this.w = w
        this.h = h
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position

        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
    } 
}