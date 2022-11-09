function init() {
  document.getElementById("entrybutton").addEventListener("click", buttonRespond);
    function buttonRespond() {
      var inTxtMsg = document.getElementById("entryinput").value;
      document.getElementById("textoutput").innerHTML = inTxtMsg;
      alert("Trent Coleman: " + inTxtMsg);
    }
}
     window.addEventListener('load', init);
