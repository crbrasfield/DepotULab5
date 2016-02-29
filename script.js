//hide upper case keyboard on doc ready
$(document).ready(function () {
    console.log("ready!");
    $("#keyboard-upper-container").hide();
    
    
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var letterCount = 'lsdfsadfkn';
    var totalLetters = sentences[0].length;
    displaySentence(sentences[0]);
    displayLetter(letterCount);
    
    
    
});


function displaySentence (i){
    $('#words').html(i);
}

function displayLetter (i){
    $('#next-letter').html(i);
}



//shift keydown shows uppercase/hides lowercase
$(this).on('keydown', function (key) {
    if (key.which == 16) {
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
        
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




$(this).on('keydown', function () {
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
    
})


$(this).on('keyup', function () {
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




