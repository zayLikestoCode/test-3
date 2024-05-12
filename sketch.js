let scale = 10;
let sharkImg;
let colors = ['#ffd1dc','#b19cd9','#ff6961']
let currentColorIndex = 0;

function preload() {
  sharkImg = createImg('MommaShark.jpg');
}

function setup() {
  createCanvas(1000, 1000);
 textAlign(CENTER, TOP);
  textSize(24);
  frameRate(1);
}

function draw() {
  background(colors[currentColorIndex]);
  
  currentColorIndex =
    (currentColorIndex + 1) %
    colors.length;
 
  translate(width / 2, height / 2);
  fill(232,160,132)
  beginShape();
  let xoff = 0;
  for (let angle = 0; angle < TWO_PI; angle += 0.1){
    let x = scale * 16 * pow(sin(angle), 3);
    let y = scale * -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle));
    vertex(x,y);
    xoff += 0.1;
  }
  endShape(CLOSE);

  fill(0);
text("Happy Mother's Day Mom",10, -180);
text("I Love You So Much",10,170);
  
  sharkImg.position(460,470)
  sharkImg.size(85,85)
  
}
