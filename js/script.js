function init(){
//add your javascrip between these two lines of code
myEventFunction {
 alert("Trent Coleman Hello this is a test");
}
var d4 = document.getElementById('div4');
d4.addEventListener('click', myEventFunction);
 
d4.addEventListener('click', Function(){
  console.log('I was Clicked!');
  d4.style.backgroundColor = '#C00';
  d4.innerHTML = '<strong>Goodbye</strong>';
 
  var ipmsg = document.getElementById('entryinput');
  alert(ipmsg.value);
  ipmsg.value = "javascript worked";
  
}
window.addEventListener('load', init);
