function init(){
//add your javascrip between these two lines of code
myEventFunction {
 alert("Trent Coleman");
}
var eb = document.getElementById("entrybutton");
 
eb.addEventListener("click", function()){
 
  var ipmsg = document.getElementById("entryinput");
  var bottomh2 = document.getElementById("textoutput");
  alert("Trent Coleman:" + ipmsg.value);
  bottomh2.value = ipmsg.value;
}
}
window.addEventListener("load", init);
