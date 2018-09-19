var x = (150);
var y = (100);
var d = (150);
var s = (50);
var o = (50)
var q = (100)

function setup() {
createCanvas(1200,1000);
background (204);
strokeWeight(4);
}

function draw(){
  for(var i=0; i<9; i++){
  rect(x*i,y+o*i,d,s);
}
}
//js stands for java script , set ups draw once while draw puts up 60 frames per second
