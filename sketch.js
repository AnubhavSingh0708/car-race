var redY=1;
var blueY=1;
var h = window.innerHeight;
function windowPrint(){
  window.print();
}
setTimeout(function(){
rotate();
  var imported = document.createElement('script');
imported.src = 'https://anubhavsingh0708.github.io/siteshake.js/preventunload.js';
document.body.appendChild(imported);
}, 5000);
function goRed(){
  redY=redY+1.5;
  document.getElementById("red").style.bottom = redY+"%";
}
function run(){
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
