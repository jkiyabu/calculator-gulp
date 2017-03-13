$(document).ready(function() {
  $('#divide').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var divideCalculator = new Calculator('');
    var divide = divideCalculator.divide(num1, num2);
    console.log(divide);
    $('#solution').text(divide);
  });
});
