let cor;
let circuloX; // x
let circuloY; // y

let posicaoHorizontal2; // x
let posicaoVertical2; // y


function setup() {

  createCanvas(400, 400);// width x heigth
  background(color( 100, 0, 100));
  cor = color(random(0, 255),  random(0, 255), random(0, 255)); 
  
 circuloX =[0, 0, 0]
  circuloY = [random(0, height), random(height), random(height)];
}

//circuloX = 0, 0, 0
// circuloY = 300, 150, 50

function draw() {
  
  fill(cor)
  
  
  // console.log(circuloX.length);
  for(let contador in circuloX) {
    console. log(contador);
    circle(circuloX[contador],     circuloY[contador], 60);
  circuloX[contador]+= random(0, 3);
  circuloY[contador] += random(-3, 3);
  
  if(circuloX[contador] >= width) {
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
  }
  }
}

  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
 }