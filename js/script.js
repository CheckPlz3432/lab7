function init(){
//add your javascrip between these two lines of code
  document.getElementByID("entrybutton").addEventListener("click", buttonRespondText);
    function buttonRespondText() {
      var inTxtMsg = document.getElementById("entryinput").value;
      document.getElementById("textoutput").innerHTML = inTxtMsg;
      alert("Trent Coleman: " + inTxtMsg);
    }
}
    window.addEventListener('load', init);
