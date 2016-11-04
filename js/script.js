function pizzaOrder(toppingAmount, size, quantity) {
  this.toppingAmount = toppingAmount;
  this.size = size;
  this.quantity = quantity;
}

pizzaOrder.prototype.cost = function(toppingAmount, size, quantity) {
debugger; 
  var cost;
  if ( size === "medium" && toppingAmount === 0) {
    cost = 20 * quantity;
  } else if ( size === "large" && toppingAmount === 0) {
    cost = 30 * quantity;
  } else if ( size === "medium" && toppingAmount > 0) {
    cost = (20 + toppingAmount) * quantity;
  } else {
    cost = (30 + toppingAmount) * quantity;
  }
  return cost;
}

$(function() {
  $("form#orderForm").submit(function(event) {

    event.preventDefault();
    var selectedSize = $("input[name=sizeRadios]:checked").val();
    var toppingChoice = [];
    $("input[name=toppingCheckbox]:checked").each( function() {
      toppingChoice.push($(this).val());
    });
    var toppingChoiceAmmount = toppingChoice.length;
    var selectedQuantity = parseInt($('select[name=orderQuantity]').val());
    var newPizzaOrder;
    newPizzaOrder = new pizzaOrder(selectedSize, toppingChoiceAmmount, selectedQuantity);

    $("#orderQuantity").text(newPizzaOrder.quantity);
    $("#orderSize").text(newPizzaOrder.size);
    // $("#pizzaTopping").text(toppingChoice);
    $("#totalCost").text(newPizzaOrder.cost(selectedSize, selectedQuantity));
    $("#pizzaOrder").show();
    return false;
  });
});
