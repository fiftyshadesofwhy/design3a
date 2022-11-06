let bg;
let wc;
let wcc;
let wcb;
let pic;
let picc;
let picb;
let oc;
let occ;
let ocb;
let yc;
let ycc;
let ycb;
let gc;
let gcc;
let gcb;
let bc;
let bcc;
let bcb;
let puc;
let pucc;
let pucb;
let dw;
let rc;
let rcb;
// let cam;
// let camb;
let chalkfill;
let path;
let nodraw;

function preload() {
  bg = loadImage('asphalt.jpg');
  wc = loadImage('wc.png');
  wcc = loadImage('whitechalk.png');
  pic = loadImage('pic.png');
  picc = loadImage('pinkchalk.png');
  oc = loadImage('oc.png');
  occ = loadImage('orangechalk.png');
  yc = loadImage('yc.png');
  ycc = loadImage('yellowchalk.png');
  gc = loadImage('gc.png');
  gcc = loadImage('greenchalk.png');
  bc = loadImage('bc.png');
  bcc = loadImage('bluechalk.png');
  puc = loadImage('puc.png');
  pucc = loadImage('purplechalk.png');
  // cam = loadImage ('camera.png');
  chalkfill = '#EFEFEF';
  const buttons = [wcb, picb, ocb, ycb, gcb, bcb, pucb, rcb];   rc = loadImage('raincloud.png');
}

function setup() {
  frameRate(100);
  createCanvas(windowWidth, windowHeight);
  background (bg, 220);
  image(rc, windowWidth-138, 3);
    rcb = createButton(' ');
    rcb.class('reset');
    rcb.size(126,80);
    rcb.position(windowWidth-133,9);
    rcb.style('background-color','#00000000');
    rcb.style('border-color','#00000000');
  image(wc, 0, windowHeight-160);
    wcb = createButton('');
    wcb.class('button');
    wcb.size(41,157);
    wcb.position(0,windowHeight-160);
    wcb.style('background-color','#00000000');
    wcb.style('border-color','#00000000');
  image(pic, 40, windowHeight-160);
    picb = createButton('');
    picb.class('button');
    picb.size(41,157);
    picb.position(40,windowHeight-160);
    picb.style('background-color','#00000000');
    picb.style('border-color','#00000000');
  image(oc, 80, windowHeight-160);
    ocb = createButton('');
    ocb.class('button');
    ocb.size(41,157);
    ocb.position(80,windowHeight-160);
    ocb.style('background-color','#00000000');
    ocb.style('border-color','#00000000');
  image(yc, 120, windowHeight-160);
    ycb = createButton('');
    ycb.class('button');
    ycb.size(41,157);
    ycb.position(120,windowHeight-160);
    ycb.style('background-color','#00000000');
    ycb.style('border-color','#00000000');
  image(gc, 160, windowHeight-160);
    gcb = createButton('');
    gcb.class('button');
    gcb.size(41,157);
    gcb.position(160,windowHeight-160);
    gcb.style('background-color','#00000000');
    gcb.style('border-color','#00000000');
  image(bc, 200, windowHeight-160);
    bcb = createButton('');
    bcb.class('button');
    bcb.size(41,157);
    bcb.position(200,windowHeight-160);
    bcb.style('background-color','#00000000');
    bcb.style('border-color','#00000000');
  image(puc, 240, windowHeight-160);
    pucb = createButton('');
    pucb.class('button');
    pucb.size(41,157);
    pucb.position(240,windowHeight-160);
    pucb.style('background-color','#00000000');
    pucb.style('border-color','#00000000');
  // image(cam, windowWidth-175, windowHeight-200, 200, 200);
  //   camb = createButton('');
  //   camb.class('button');
  //   camb.size(150,200);
  //   camb.position(windowWidth-150, windowHeight-200);
  //   camb.style('background-color','#00000000');
  //   camb.style('border-color','#00000000');
  wcb.mousePressed(makeWhite);
  picb.mousePressed(makePink);
  ocb.mousePressed(makeOrange);
  ycb.mousePressed(makeYellow);
  gcb.mousePressed(makeGreen);
  bcb.mousePressed(makeBlue);
  pucb.mousePressed(makePurple);
  // camb.mousePressed(takePicture);
  rcb.mousePressed(rainTime);
}

function draw() {

  noStroke();
  if (mouseIsPressed) {
    fill(chalkfill);
  }
  else {
    noFill();
  }
  ellipse(mouseX, mouseY, 15, 15);
}


function makeWhite() {
  document.body.style.cursor = 'url(whitechalk.png) 102 128, default';
  chalkfill = '#EFEFEF'
}

function makePink() {
  document.body.style.cursor = 'url(pinkchalk.png) 102 128, default';
  chalkfill = '#FFBAE5'
}

function makeOrange() {
  document.body.style.cursor = 'url(orangechalk.png) 102 128, default';
  chalkfill = '#FDB36B'
}

function makeYellow() {
  document.body.style.cursor = 'url(yellowchalk.png) 102 128, default';
  chalkfill = '#FFEE99'
}

function makeGreen() {
  document.body.style.cursor = 'url(greenchalk.png) 102 128, default';
  chalkfill = '#AFEC99'
}

function makeBlue() {
  document.body.style.cursor = 'url(bluechalk.png) 102 128, default';
  chalkfill = '#8CE0FF'
}

function makePurple() {
  document.body.style.cursor = 'url(purplechalk.png) 102 128, default';
  chalkfill = '#DFADFF'
}

function rainTime() {
  setup();
    document.body.style.cursor = 'url(hand.png) 85 50, default';
  chalkfill = '#00000000'
}

// function takePicture() {
//   saveCanvas('ordinaryextraordinarymemories','png');
//   document.body.style.cursor = 'url(hand.png) 85 50, default';
//   chalkfill = '#00000000'
// }