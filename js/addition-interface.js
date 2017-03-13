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
