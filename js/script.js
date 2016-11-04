function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.cost = function(topping, size) {
  var cost;
  if
   = this.topping + this.size;
  return cost
};

$(function() {
  $("form#order").submit(function(event)) {
    event.preventDefault();
    $("#order").click(function(event)) {
      var topping = parseInt($('topping').val());
      var size = parseInt($('size').val());
      var newPizza = new Pizza(topping, size);
    }
    $('#reciept').append('<p>Total: $' + newPizza.cost() + 'Thank you.</p>');
  });
});
