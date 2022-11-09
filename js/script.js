function init(){
//add your javascrip between these two lines of code
myEventFunction {
 alert("Trent Coleman");
}
var eb = document.getElementById('entrybutton');
 
eb.addEventListener('click', myEventFunction);
 
eb.addEventListener('click', function()){
  console.log('I was Clicked!');
  eb.style.backgroundColor = '#C00';
  eb.innerHTML = '<strong>Goodbye</strong>';
 
  var ipmsg = document.getElementById('entryinput');
  alert(ipmsg.value);
  ipmsg.value = "javascript worked";
}
}
window.addEventListener('load', init);
