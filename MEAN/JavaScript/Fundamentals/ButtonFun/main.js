$(document).ready(function() {
    var prior = $('button').css('background-color');

    $('button').click(function(){
        console.log($(this).css('background-color'));
        if($(this).css('background-color') == 'rgb(135, 206, 235)') {
            $(this).css('background-color', 'red');
            prior = $(this).css('background-color');
        }
        else {
            $(this).css('background-color', 'skyblue');
            prior = $(this).css('background-color');
        }
    });


    $('button').hover(
        function() {
            $(this).css('background-color', 'yellow');
        }, 
        function () {
            $(this).css('background-color', prior);
        },
    );
});