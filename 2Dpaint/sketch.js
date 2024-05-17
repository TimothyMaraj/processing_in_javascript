


let w = 10; 
let grid; 
let cols,rows; 



function getCordinate(cordinate)
{
    
    let x = cordinate[0];
    let y = cordinate[1];
    
    x = Math.round(x/10);
    y = Math.round(y/10);

    let convertedCordinate = [];
  // console.log(x,y);
  
  // errror check shit!
  if(x >= width/w || y >= height/w || x<0 || y <0)
    return null;
  else
  {
    convertedCordinate[0] = x;
    convertedCordinate[1] = y ; 
    return convertedCordinate;
  }
     
}


function fillPixel(cordinate)
{
  
  let convertedCord = getCordinate(cordinate);
  if(!convertedCord)
    return;
  let x = convertedCord[0];
  let y = convertedCord[1];
  grid[x][y] = 1; 
  
}

function removePixel(cordinate)
{
  
   let convertedCord = getCordinate(cordinate);
  if(!convertedCord)
    return;
  let x = convertedCord[0];
  let y = convertedCord[1];
  
  grid[x][y] = 0; 
}

function movePixel(cordinate)
{
 
  
}


function captureMouse()
{
  let cordinate = []; 
  cordinate[0]= mouseX;
  cordinate[1] = mouseY;
  return cordinate;
}

function make2DArray(cols,rows)
{
  let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++)
    arr[i] = new Array(rows);
  
  return arr; 
}

function initalize()
{
  for(let i = 0; i < cols; i++)
    {
      for(let j = 0; j < rows; j++)
        {
          grid[i][j] = 0; 
        }
    }
}

function gridFill()
{
  for(let i = 0; i < cols; i++)
    {
      for(let j = 0; j < rows; j++)
        {
          let x = i*w; 
          let y = j*w; 
          stroke(255);
          fill(grid[i][j]*255);
          square(x,y,w)
        }
    }
}




function setup()
{

  createCanvas(400,400);
  cols = width/w;
  rows = height/w;
  grid = make2DArray(cols,rows); 

  initalize(); 
 

}

function draw() {
  
  background(255); 
  gridFill();
  
  //refactor cordinate for obj.x and obj.y synatcs
  if(mouseIsPressed)
  {
    let cordinate;
    cordinate = captureMouse();
    if(mouseButton == LEFT)
      fillPixel(cordinate);
    else if(mouseButton == RIGHT)
      removePixel(cordinate);
  }
    
}