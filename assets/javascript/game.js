//stopped at 16 minute mark

var random_result;
var lost = 0;
var win =0;
var previous =0;

var img = ["assets/images/crystal1.jpg", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.jpg"]

var resetAndStart = function() {
    $(".crystals").empty();

random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

        $(".crystals").append(crystal);
    }
        $("#previous").html("Total Score: " + previous);
}


resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result){

        lost++;

        $("#lost").html("You lost: " + lost);
        previous = 0;
        
        resetAndStart();
    }
    else if(previous === random_result) {

        win++;

        $("#win").html("You win: " + win);

        previous = 0;

        resetAndStart();
    }
});

$('#crystal1').prepend('<img id="crystal1" src="assets/images/crystal1.jpg"/>')



//a game with 4 crystals and Random Result
//every crystal needs to have a random number
// a new random number should be generated every single time we win or lose
//when clicking any crystal it should be adding with the previous click until it hits the random result
//if it is greater then the random result, we decrement a lost counter
//if it is equal, then we increment a win counter