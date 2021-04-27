class Level_1{
    constructor(x,y,w,h){
        
        this.Visibility = 255;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.log = loadImage("wood2.png");
        World.add(world,this.log);
    }
    display(){
        push()
        //console.log(this.box1.speed);
    if(this.box1.speed < 10){
      var stonepos= this.box1.position;
        push();
        translate(stonepos.x, stonepos.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        fill("blue");
        pop();
    }
    else{
    push(); 
    World.remove(world,this.box1); 
    this.Visibility = this.Visibility - 2;
    tint(255,this.Visibility);
    pop(); 
    }
  }

    }
