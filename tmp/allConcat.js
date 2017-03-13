$(document).ready(function() {
  $('#add').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var addCalculator = new Calculator('');
    var add = addCalculator.add(num1, num2);
    console.log(add);
    $('#solution').text(add);
  });
});

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
});

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
