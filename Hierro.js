class Hierro {
    constructor(x, y, width, height) {
      var options = {
        'density':25,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){	
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      rotate(angle);
      translate(pos.x, pos.y);
      fill('grey');
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }