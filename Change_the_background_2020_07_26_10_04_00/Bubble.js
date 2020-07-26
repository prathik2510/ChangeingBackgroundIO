class Bubble {

  constructor() {
    //var allInstances = [];

    var radius = (600);
    this.x = (300);
    this.y = (200);
    this.width = 850;
    this.height = 600;

    this.color = random(color(450, 367, 140, 309, 543, 247));
    //this.velocityX = random(-2, +3);
    //this.velocityY= random(-2, +3);

    this.display = function() {
      // stroke(2);
      fill(150, mouseY, mouseX, 260);
      //fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    this.move = function() {
      // this.x = this.x + this.velocityX;
      //this.y = this.y + this.velocityY;
    }

  }
}