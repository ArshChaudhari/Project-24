
class CBase{
  constructor(x,y,w,h){
    
    var options = {
      isStatic: true
    }
    
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    
    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
    
    this.image = loadImage("base1.png");
  }

  display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
  }
}
