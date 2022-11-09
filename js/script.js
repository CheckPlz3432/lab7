function init(){
//add your javascrip between these two lines of code
  var button = document.getElementByID("entrybutton").value;
  document.getElementByID("entrybutton").addEventListener("click", buttonRespondText);
    function buttonRespondText() {
      var inTextMsg = document.getElementById("entryinput").value;
      document.getElementById("textoutput").innerHTML = inTextMsg;
      alert("Trent Coleman: " + inTextMsg);
    }
}
window.addEventListener("load", init);
