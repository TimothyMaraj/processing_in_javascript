

class Ball
{
  constructor(x,y)
  {
    this.location = createVector(x,y);
    this.velocity = createVector(8,2);
    this.acel = createVector(1,1);
    this.diameter = 50;
  }


  move()
  {
    this.location.add(this.velocity);

    if(this.location.x - this.diameter/2 <= 0 || this.location.x+this.diameter/2 >= width)
      this.velocity.mult(-1,1);

    if(this.location.y - this.diameter/2 <= 0 || this.location.y+this.diameter/2 >= height)
      this.velocity.mult(1,-1);
    

  }

  show()
  {
    ellipse(this.location.x,this.location.y,this.diameter,this.diameter);
    fill(0);
  }
}



let b; 

let num = 5; 

let balls;

function setup() {
  createCanvas(500, 500);
  b = new Ball();
 balls = [];

  for(let i = 0; i < num; i++)
    {
      balls[i] = new Ball(random(0,width),random(0,height));
    }
}

function draw() {
  background(220);
  b.show();
  b.move();
  
  for(let i =0; i<num;i++)
    {
      balls[i].move();
      balls[i].show();
    }
}