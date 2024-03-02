var xb00; // Texto centralizado

//variaveis da tela 0 - Tela inicial
var yb01;
var yb02;
var yb03;
var larguraB1;
var alturaB1;
var suavizaB;

var tela

function setup() {
  tela = 0
  //variaveis da tela 0 - Tela inicial
  xb00=100;
  yb01=90;
  yb02=190;
  yb03=290;
  larguraB1 = 200;
  alturaB1 = 60;
  suavizaB=17;
  
  createCanvas(400, 400);
}

function draw() {
  if (tela==0){
    telaInicial();
  }

  if(tela == 1){
    telaPesquisa();
  }
}

function telaInicial() {
    background('#17225c');
    textSize(28);
  
    text("Vetor de frutas", xb00+10, yb01-30);
    text("Elementos: \nbanana    laranja \npêra        maça\nuva         goiaba\nacerola   manga ", xb00+10, yb01+30);
  
    if(mouseY>yb02 && mouseY<yb02+180+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#f94d15') 
    }
    rect(xb00,yb02+140,larguraB1,alturaB1,suavizaB);
    fill(0);
    text("Pesquisa", xb00+50, yb02+180);
    fill(255);
}