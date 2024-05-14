
class Ball
{
  constructor(x,y,speed)
  {
    this.x = x; 
    this.y = y;
    this.diameter = 20; 
    this.radius = this.diameter/2;
    
    this.xspeed = speed; 
    this.yspeed = random(0,speed); 
    
    this.grav = 0.1; 
  } 
  
  show()
  {
    fill(0);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
  
  move()
  {
    this.x+=this.xspeed;
     this.y+=this.yspeed;
    
    if(this.x+this.radius >= width || this.x-this.radius <=0)
      this.xspeed*=-1;
    if(this.y+this.radius >= width || this.y-this.radius <=0)
      this.yspeed*=-1;
    /*
    if( dist(this.x, this.y, r.x, r.y) <= this.radius + r.w/2)
    {
      this.yspeed*=-1;
      this.xspeed*=-1;
    }    
    */
    
  }
  
  ballCollied(obj)
  {
    if(dist(this.x,this.y, obj.x, obj.y) <= obj.radius+this.radius){
      this.yspeed*=-1;
      this.xspeed*=-1;
    }    
    
      
  }
  
  
  
}