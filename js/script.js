function init(){
//add your javascrip between these two lines of code
document.getElementByID("entrybutton").addEventListener("click", buttonRespondText);
  function buttonRespondText() {
    var inTextMsg = document.getElementById("entryinput").value;
    var outTextMsg = document.getElementById("textoutput").innerHTML;
    outTextMsg = inTextMsg;
    alert("Trent Coleman: " + inTextMsg);
  }
}
window.addEventListener("load", init);
