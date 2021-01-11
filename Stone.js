class Stone {
    constructor(x,y,r){
        var options = {
            
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x=x;
        this.y=y;
        this.r=r*3;
        this.image=loadImage("sprites/stone.png")
        World.add(world, this.body);
      
    }
  
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
      }
  }