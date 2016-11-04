function Pizza(toppings, sizes) {
  this.toppings = toppings;
  this.sizes = size;
}

Pizza.prototype.calculate = function(){
  return this.topping + this.sizes;
}

$(function() {
  $('form#order').submit(function(event)) {
    event.preventDefault();

    var toppings = parseInt($('toppings').val());
    var sizes = parseInt($('sizes').val());
    var newPizza = new Pizza(toppings, sizes);

    $('#reciept').append('<p>Total Cost: $' + newPizza.calculate() + '</p>');
  });
});
