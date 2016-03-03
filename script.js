//hide upper case keyboard on doc ready
$(document).ready(function () {
    console.log("ready!");
    $("#keyboard-upper-container").hide();



    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var counter = 0;
    var currentSentence = sentences[counter];
    var totalLetters = currentSentence.length;
    var currentLetterIndex = 0;
    
    
    console.log(totalLetters);
    
    
    sentenceToType(currentSentence);
    letterToType(currentSentence[currentLetterIndex]);

    $(document).keypress(function (e) {
        var userPress = String.fromCharCode(e.which)
        console.log(userPress)
        

        if (userPress === currentSentence[currentLetterIndex]) {
            $('.glyphicon-ok').css('opacity','.9');
            $('.glyphicon-remove').css('opacity','.1');
            console.log('it works');
            currentLetterIndex++;
            letterToType(currentSentence[currentLetterIndex]);
            console.log(currentLetterIndex);
            console.log(totalLetters);
                if (currentLetterIndex === totalLetters) {
                    console.log('it is complete');
                    counter++;
                    currentSentence = sentences[counter];
                    currentLetterIndex = 0;
                    totalLetters = currentSentence.length;
                    sentenceToType(currentSentence);
                    letterToType(currentSentence[currentLetterIndex]);
                } 
            
        } else {
           $('.glyphicon-remove').css('opacity','.9'); 
           $('.glyphicon-ok').css('opacity','.1');
           console.log('wrong button');
           $('#'+ userPress).css({
               "background-color": "grey"
           })
          
           
        }
        
        
        
    });
});


function sentenceToType(i) {
    $('#words').html(i);
};

function letterToType(i) {
    $('#next-letter').html(i);
};

function nextLetter(i) {
    $('#next-letter').html(i);
}

function nextSentence(i) {
    $('#words').html(i);
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
});

//spacebar keydown styles spacebar
$(this).on('keydown', function (key) {
    if (key.which == 32) {
        $("#" + key.which).css({
            "background-color": "grey"
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
        $('.glyphicon-ok').css('opacity','.1');
        $('.glyphicon-remove').css('opacity','.1');
        console.log(key);

    }
});




$(this).on('keydown', function () {
    var keyCode = event.which;
    $("#" + String.fromCharCode(keyCode)).css({
        "background-color": "grey"
    });
    $("#" + (keyCode)).css({
        "background-color": "grey"
    });
    $("#" + String.fromCharCode(keyCode).toLowerCase()).css({
        "background-color": "grey"
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
    $('.glyphicon-ok').css('opacity','.1');
    $('.glyphicon-remove').css('opacity','.1');

});




