$( document ).ready(function() {
    console.log(this);
    console.log("ready!");
    
    $("#keyboard-upper-container").hide();    
});




$(this).on('keydown',function(key){
if (key.which == 16){
    $("#keyboard-upper-container").show();
    $("#keyboard-lower-container").hide();
}
});

$(this).on('keyup',function(key){
if (key.which == 16){
    $("#keyboard-lower-container").show();
    $("#keyboard-upper-container").hide();
}
})


$(this).on('keydown',function(key){
    if (key.which == 32){
    $("#" + 32).css ({
        "background-color":"green"
    });
    console.log(key);
    
    }
})

$(this).on('keyup',function(key){
    if (key.which == 32){
    $("#" + 32).css ({
        "background-color":"#f5f5f5"
    });
    console.log(key);
    
    }
})




$(this).on('keydown', function(event) {
  var keyCode = event.which;
  $("#" + String.fromCharCode(keyCode).toLowerCase()) .css ({
      "background-color":"green"
  });
})

$(this).on('keyup',function(event) {
  var keyCode = event.which;
  $("#" + String.fromCharCode(keyCode).toLowerCase()) .css ({
      "background-color":"#f5f5f5"
  });
      
})

$(this).on('keydown', function(event) {
  var keyCode = event.which;
  $("#" + String.fromCharCode(keyCode)) .css ({
      "background-color":"green"
  });
  console.log("#" + keyCode);
})

$(this).on('keyup',function(event) {
  var keyCode = event.which;
  $("#" + String.fromCharCode(keyCode)) .css ({
      "background-color":"#f5f5f5"
  });
  
      
})
