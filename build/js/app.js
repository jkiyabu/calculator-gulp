(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(num1, num2) {
  var added = num1 + num2;
  return added;
};

Calculator.prototype.subtract = function(num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiply = function(num1, num2) {
  return num1 * num2;
};

Calculator.prototype.divide = function(num1, num2) {
  return num1 / num2;
};



exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
