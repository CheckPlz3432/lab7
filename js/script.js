function init(){
//add your javascrip between these two lines of code
myEventFunction {
 alert("Trent Coleman");
}
var eb = document.getElementById("entrybutton");
 
eb.addEventListener("click", function()){
 
  var ipmsg = document.getElementById("entryinput");
  alert("Trent Coleman:" + ipmsg.value);
  ipmsg.value = "javascript worked";
}
}
window.addEventListener("load", init);
