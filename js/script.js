function pizzaOrder(topping, size) {
  this.topping = topping;
  this.size = size;
}

pizzaOrder.prototype.cost = function(topping, size) {
  var cost;
  if ( size === 'med' && topping === 0) {
    cost = 20;
  } else if ( size === 'lg' && topping === 0) {
    cost = 30;
  } else if ( size === 'med' && topping > 0){
    cost = (20 + topping);
  } else {
    cost = (30 + topping);
  }
  return cost;
}

$(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var selectSize = $("input[name=sizeRadios]:checked").val();
    var toppingChoice = [];
    $("input[name=toppingCheckbox]:checked").each( function() {
      toppingChoice.push($(this).val());
    });
    var toppingAmmount = toppingChoice.length;
    var newPizzaOrder;
    newPizzaOrder = new pizzaOrder(selectSize, toppingAmmount);

    $("#orderSize").text(newPizzaOrder.size);
    $("#pizzaTopping").text(toppingChoice);
    $("#totalCost").text(newPizzaOrder.cost(selectSize, toppingChoice));
    $("#pizzaOrder").show();
    return false;
  });
});
