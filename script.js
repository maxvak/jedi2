function viewDiv(){
    document.getElementById("popup").style.display = "block";
    

  };
  function viewDiv2(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "block";
  };
  function popupClose(){
    document.getElementById("popup").style.display = "none";
    

  };
  function checkParams() {
    var url = $('#url').val();
    if(url.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}