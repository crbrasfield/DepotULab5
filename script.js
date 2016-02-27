$( document ).ready(function() {
    console.log(this);
    console.log("ready!");
    
    $("#keyboard-upper-container").hide();    
});




$(this).keydown(function(key){
if (key.which == 16){
    $("#keyboard-upper-container").show();
    $("#keyboard-lower-container").hide();
}
});

$(this).keyup(function(key){
if (key.which == 16){
    $("#keyboard-lower-container").show();
    $("#keyboard-upper-container").hide();
}
})






$(this).keydown(function(event) {
  var keyCode = event.which;  
  console.log(keyCode);
  console.log(String.fromCharCode(keyCode));
  $("#" + String.fromCharCode(keyCode)) .css ({
      "background-color":"red"
  });
  console.log("#" + keyCode);
})

$(this).keyup(function(event) {
  var keyCode = event.which;
  console.log(keyCode)
  $("#" + String.fromCharCode(keyCode)) .css ({
      "background-color":"#f5f5f5"
  });
      
})


