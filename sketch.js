function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(70, 106, 235);


rect(50, 50, 300, 300);
  fill (70, 106, 235);
strokeWeight(4);
  
  push()
  translate(100, 50);
  line (0, 0 ,0, 300) 
   pop();
  
  
    push()
  translate(150, 50);
  line (0, 0 ,0, 300) 
   pop();
  
    push()
  translate(200, 50);
  line (0, 0 ,0, 300) 
   pop();
  
     push()
  fill (225)
  noStroke();
  translate(200, 150);
    ellipse (0, 0 ,30, 30) 
   pop();
  
     push()
  fill (225)
  noStroke();
  translate(150, 300);
    ellipse (0, 0 ,30, 30) 
   pop();
  
       push()
  fill (225)
  noStroke();
  translate(100, 300);
    ellipse (0, 0 ,30, 30) 
   pop();
 
}
