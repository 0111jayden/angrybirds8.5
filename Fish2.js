class Fish2 extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/fish2.png");
    this.Visiblity = 255;
  }

  display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }


  move(){
    var a = Math.round(Math.random()*4);
    if (a = 1 && this.body.position.x > 305) {
      this.body.position.x -= 5;
    }
    if(a = 2 && this.body.position.y > 200){
      this.body.position.y -= 5;
    }
    if(a = 3 && this.body.position.x < 1050){
      this.body.position.x += 5
    }
    if(a = 4 && this.body.position.y < 375){
      this.body.position.y += 5
    }
  }



};