function pizzaOrder(topping, size, quantity) {
  this.topping = topping;
  this.size = size;
  this.quantity = quantity;
}

pizzaOrder.prototype.cost = function(topping, size, quantity) {
  // debugger;
  var price = 0.00
  if ( size === "medium" && this.topping === 0) {
    price = 20 * this.quantity;
  } else if ( size === "large" && this.topping === 0) {
    price = 30 * this.quantity;
  } else if ( size === "medium" && this.topping > 0) {
    price = (20 + this.topping) * this.quantity;
  } else {
    price = (30 + this.topping) * this.quantity;
  }
  return price;
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
    // return false;
  });
});
