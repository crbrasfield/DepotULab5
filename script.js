//hide upper case keyboard on doc ready
$(document).ready(function () {
    console.log("ready!");

    $("#keyboard-upper-container").hide();
     
});

//shift keydown shows uppercase/hides lowercase
$(this).on('keydown', function (key) {
    if (key.which == 16) {
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
        $(".words").append('hello');
    }
});

//shift keyup shows lowercase/hides uppercase
$(this).on('keyup', function (key) {
    if (key.which == 16) {
        $("#keyboard-lower-container").show();
        $("#keyboard-upper-container").hide();
    }
})

//spacebar keydown styles spacebar
$(this).on('keydown', function (key) {
    if (key.which == 32) {
        $("#" + key.which).css({
            "background-color": "green"
        });
        console.log(key);

    }
})

//spacebar keyup styles spacebar to original color
$(this).on('keyup', function (key) {
    if (key.which == 32) {
        $("#" + key.which).css({
            "background-color": "#f5f5f5"
        });
        console.log(key);

    }
})




$(this).on('keydown', function (event) {
    var keyCode = event.which;
    $("#" + String.fromCharCode(keyCode)).css({
        "background-color": "green"
    });
    $("#" + (keyCode)).css({
        "background-color": "green"
    });
    $("#" + String.fromCharCode(keyCode).toLowerCase()).css({
        "background-color": "green"
    });
     $("#" + (keyCode)).css({
        "background-color": "green"
    });
    $("#" + String.fromCharCode(keyCode).toLowerCase()).css({
        "background-color": "green"
    });
    
})


$(this).on('keyup', function (event) {
    var keyCode = event.which;
    $("#" + String.fromCharCode(keyCode)).css({
        "background-color": "#f5f5f5"
    });
     $("#" + (keyCode)).css({
        "background-color": "#f5f5f5"
    });
    $("#" + String.fromCharCode(keyCode).toLowerCase()).css({
        "background-color": "#f5f5f5"
    });


})




