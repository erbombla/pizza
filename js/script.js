function pizzaOrder(topping, size, quantity, cost) {
  this.topping = topping;
  this.size = size;
  this.quantity = quantity;
}

pizzaOrder.prototype.cost = function(topping, size, quantity) {
  debugger;
  var quantity = this.quantity;
  var size = this.size; 
  if ( size === "medium" && topping === 0) {
    cost = 20 * quantity;
  } else if ( size === "large" && topping === 0) {
    cost = 30 * quantity;
  } else if ( size === "medium" && topping > 0) {
    cost = (20 + topping) * quantity;
  } else {
    cost = (30 + topping) * quantity;
  }
  return cost;
}

$(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("input[name=sizeRadios]:checked").val();
    var selectedTopping = [];
    $("input[name=toppingCheckbox]:checked").each( function() {
      selectedTopping.push($(this).val());
    });
    // var newTopping = selectedTopping.length;
    var newQuantity = parseInt($('select[name=orderQuantity]').val());
    var newPizzaOrder = new pizzaOrder(selectedTopping, selectedSize, newQuantity);

    $("#orderQuantity").text(newPizzaOrder.quantity);
    $("#orderSize").text(newPizzaOrder.size);
    $("#pizzaTopping").text(selectedTopping);
    $("#totalCost").text(newPizzaOrder.cost(newPizzaOrder));
    $("#pizzaOrder").show();
    return false;
  });
});
