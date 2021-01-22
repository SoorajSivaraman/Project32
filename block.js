class Block {
  constructor(x, y, width, height, colour) {
      var options = {
          'restitution':0,
          'friction':1
}
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.colour = colour;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
     }
      display(){
      if(this.body.speed < 3)
      {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(2);
        stroke(0);
        fill(this.colour);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else
      {
        World.remove(world, this.body);
        push();
        tint(255, this.visibility);
        this.visibility = this.visibility - 20;
        fill("black");
        rectMode(CENTER);
        rect(0, 0, 0, 0);
        pop();
      }
    }
    score()
    {
      if(this.visibility < 0 && this.visibility > -200) score = score + 1;
    }
}