const items = ["apple", "banana", "pineapple"];
// global scope
function purchaseItem(itemToPurchase, quantity) {
    if(!items.includes(itemToPurchase)) {
        console.log("Error: invalid Item! Unable to complete purchase!");
        return;
    }

    if (isNaN(quantity)) {
    console.log("Error: Invalid quantity! Unable to complete purchase!");
    return;
}
  // purchase logic goes here
  let price;
  if(itemToPurchase === "apple") {
    price = 1.99;
  }
  else if(itemToPurchase === "banana") {
    price =0.99;

  }

  else if(itemToPurchase === "pineapple") {
    price = 2.99;
  }

  const totalPrice = price * quantity;
  console.log('Thank you for shopping with us')
}

console.log("Welcome to Flatiron Supermarket!")

purchaseItem("apple", 5);
purchaseItem("nonexistent item", 5);
purchaseItem("banana", "I am not a number");
purchaseItem("cucumber");

console.log (items)