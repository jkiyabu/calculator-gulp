var Calculator = require('./../js/calculator.js').calculatorModule;
var test = 55;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator('');
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#add').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var addCalculator = new Calculator('');
    var add = addCalculator.add(num1, num2);
    console.log(add);
    $('#other-solution').text(add);
  });
});
