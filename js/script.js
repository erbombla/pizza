function pizzaOrder(topping, size, quantity) {
  this.topping = topping;
  this.sizes = size;
  this.quantity = quantity;
}

pizzaOrder.prototype.cost = function() {
debugger;
  if ( this.sizes === "medium" && this.topping.length === 0) {
    cost = 20 * this.quantity;
  } else if ( this.sizes === "large" && this.topping.length === 0) {
    cost = 30 * this.quantity;
  } else if ( this.sizes === "medium" && this.topping.length > 0) {
    cost = (20 + this.topping.length) * this.quantity;
  } else if ( this.sizes === "large" && this.topping.length > 0) {
    cost = (30 + this.topping.length) * this.quantity;
  }
  return cost;
}

$(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    // debugger;
    var selectedSize = $("input[name=sizeRadios]:checked").val();
    var newQuantity = parseInt($('select[name=orderQuantity]').val());
    var selectedTopping = [];
    $("input[name=toppingCheckbox]:checked").each( function() {
      selectedTopping.push($(this).val());
    });
    // var newTopping = selectedTopping.length;

    var newPizzaOrder = new pizzaOrder(selectedTopping, selectedSize, newQuantity);
    newPizzaOrder.cost();

    $("#orderQuantity").text(newPizzaOrder.quantity);
    $("#orderSize").text(newPizzaOrder.sizes);
    $("#pizzaTopping").text(selectedTopping);
    $("#totalCost").text(newPizzaOrder.cost());
    $("#pizzaOrder").show();

  });
});
