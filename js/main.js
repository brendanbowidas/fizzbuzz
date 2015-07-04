$(document).ready(function () {

    var n = parseInt(prompt("Enter a number"), 10);
    var fizzBuzz = function(n) {
     if(n != NaN && n % 1 === 0) {

                  for (var i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    $('ul').append('<li>Fizz Buzz</li>');
                } else if (i % 3 === 0) {
                    $('ul').append('<li>Fizz</li>');
                } else if (i % 5 === 0) {
                    $('ul').append('<li>Buzz</li>');
                } else {
                    $('ul').append('<li>' + i + '</li>');
                }
            }

     }
        else {
            window.location.reload(false);
        }


    };
    fizzBuzz(n);

});
