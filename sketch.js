var c = [];
var index = 0;
var size = 30;
var space = 5;


var myColour = ("black");

function setup() {
  createCanvas(800, 600);
  noStroke();  

  c[0] = color(123, 54, 57);
  c[1] = color(233, 154, 7);
  c[2] = color(123, 54, 244);
  c[3] = color(223, 154, 250);
  c[4] = color(220, 20, 25);
  
  background(220);
}

function draw() {
  

  noStroke();
  
  //draw palette squares
  fill(c[0]);
  circle((width/2), height-size, size);

  fill(c[1]);
  circle((width/2)+(size+space)*1, height - size, size);

  fill(c[2]);
  circle((width/2)-(size+space)*1, height - size, size);

  fill(c[3]);
  circle((width/2)+(size+space)*2, height - size, size); 
  
  fill(c[4]);
  circle((width/2)-(size+space)*2, height - size, size);
}

function mousePressed() {
  // detect if palette square is clicked
  if (mouseY > height-(size*2)) {
    if (mouseX < (width/2)+(size+space)*4) {
      if (get(mouseX, mouseY) != background){
             myColour = get(mouseX, mouseY); 
      }
    }
  }
}

function touchMoved() {
  // draw a circle with current colour
//   fill(myColour);
//   circle(mouseX, mouseY, 10);
  
  stroke(myColour);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function keyPressed() {
  // cycle through colours each time a key is pressed
  index = index + 1;
  if (index > 4) index = 0;
  myColour = c[index];

  print(index);
}
