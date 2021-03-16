var redY=1;
var blueY=1;
var h = window.innerHeight;
function windowPrint(){
  window.print();
}
function goRed(){
  redY=redY+1.5;
  document.getElementById("red").style.bottom = redY+"%";
}
function run(){
setTimeout(function(){
  check();
  blueY=blueY+0.49;
   document.getElementById("blue").style.bottom = blueY+"%";
}, 30);
}
function check(){
   h = window.innerHeight;
 if(blueY>99){
   location.assign("loose.html");
 } else if (redY>99){
    location.assign("win.html");
 } else{
   setTimeout(function(){ run();}, 30);
 }
}
