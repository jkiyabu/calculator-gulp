$(document).ready(function() {
  $('#multiply').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var multiplyCalculator = new Calculator('');
    var multiply = multiplyCalculator.multiply(num1, num2);
    console.log(multiply);
    $('#solution').text(multiply);
  });
});
