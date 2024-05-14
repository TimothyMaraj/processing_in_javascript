let b; 
let s; 
let balls = [];
const num = 5;
function setup() {
  createCanvas(500, 500);
  
  
  for(let i = 0; i < num; i++)
  {
    balls[i] = new Ball(random(0,width),random(0,height),3);
  }
  
}

function draw() {
  background(220);
  for(let i = 0; i < num; i++)
  {
    balls[i].move();
    
    for(let j = 0;j<num;j++)
    {
      if(j!=i)
        balls[i].ballCollied(balls[j]);
      
    }
    balls[i].show();
  }
    
}