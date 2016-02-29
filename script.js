//hide upper case keyboard on doc ready
$(document).ready(function () {
    console.log("ready!");
    $("#keyboard-upper-container").hide();



    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var currentSentence = sentences[0];
    var totalLetters = sentences[0].length;
    var currentLetter = currentSentence.charAt(0);
    var nextLetter = currentSentence.charAt(+1)
    


    sentenceToType(sentences[0]);
    letterToType(currentLetter);

    $(document).keypress(function (e) {
        var userPress = String.fromCharCode(e.which)
        console.log(userPress)

        if (userPress === currentLetter) {
            $('.glyphicon-ok').css('opacity','.9');
            $('.glyphicon-remove').css('opacity','.1');
            console.log('it works');
            
        } else {
           $('.glyphicon-remove').css('opacity','.9'); 
           $('.glyphicon-ok').css('opacity','.1');
           console.log('wrong button');
        }
    });
});


function sentenceToType(i) {
    $('#words').html(i);
};

function letterToType(i) {
    $('#next-letter').html(i);
};

















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
});

//spacebar keydown styles spacebar
$(this).on('keydown', function (key) {
    if (key.which == 32) {
        $("#" + key.which).css({
            "background-color": "yellow"
        });
        console.log(key);

    }
});

//spacebar keyup styles spacebar to original color
$(this).on('keyup', function (key) {
    if (key.which == 32) {
        $("#" + key.which).css({
            "background-color": "#f5f5f5"
        });
        console.log(key);

    }
});




$(this).on('keydown', function () {
    var keyCode = event.which;
    $("#" + String.fromCharCode(keyCode)).css({
        "background-color": "yellow"
    });
    $("#" + (keyCode)).css({
        "background-color": "yellow"
    });
    $("#" + String.fromCharCode(keyCode).toLowerCase()).css({
        "background-color": "yellow"
    });

});


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


});




