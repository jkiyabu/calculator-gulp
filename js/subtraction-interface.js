$(document).ready(function() {
  $('#subtract').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var subtractCalculator = new Calculator('');
    var subtract = subtractCalculator.subtract(num1, num2);
    console.log(subtract);
    $('#solution').text(subtract);
  });
});
