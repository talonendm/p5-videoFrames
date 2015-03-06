var img1;  // Declare variable 'img'.
var img2;
var img3;
var capture;


function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
  img1 = createImage(320, 240);
  img2 = createImage(320, 240);
  img3 = createImage(320, 240);

}

function draw() {
  background(0);
  image(img1, 0, 0);
  image(img2, 100, 0);
  image(img3, mouseX-img3.width/2, mouseY-img3.height/2);

}



function keyPressed(){
if(key==='1'){
  img1.loadPixels(); //load pixels of img
  capture.loadPixels();
  print("capture.length"+capture.pixels.length)
  print("img1.length"+img1.pixels.length)
  for(var x = 0; x < img1.width; x++) {
    for(var y = 0; y < img1.height*5; y++) {
      //copy pixels from capture to img
      var i = y * capture.width + x;
      img1.pixels[i]=capture.pixels[i];

    }
  }
  img1.updatePixels(); //update pixel values
}

if(key==='2'){
  img2.loadPixels(); //load pixels of img
  capture.loadPixels();
  for(var x = 0; x < img2.width; x++) {
    for(var y = 0; y < img2.height*5; y++) {
      //copy pixels from capture to img
      var i = y * capture.width + x;
      img2.pixels[i]=capture.pixels[i];
}
}
img2.updatePixels(); //update pixel values
}

if(key==='3'){
  img3.loadPixels(); //load pixels of img
  capture.loadPixels();
  for(var x = 0; x < img3.width; x++) {
    for(var y = 0; y < img3.height*5; y++) {
      //copy pixels from capture to img
      var i = y * capture.width + x;
      img3.pixels[i]=capture.pixels[i];
}
}
img3.updatePixels(); //update pixel values
}
}
