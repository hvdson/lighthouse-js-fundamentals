var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
function printIngredientsWhileLoop(items){
  var i = 0;
  while (i < items.length - 1) {
    console.log(items[i]);
    i++;
  }
}
console.log("While Loop:");
printIngredientsWhileLoop(ingredients);

// Write a for loop that prints out the contents of ingredients:

function printIngredientsForLoop(items) {
  for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}
console.log("\nFor Loop:");
printIngredientsForLoop(ingredients);

// Write any loop (while or for) that prints out the contents of the ingredients backwards

function printIngredientsBackwards(items) {
  for (var i = items.length - 1; i >= 0; i--) {
    console.log(items[i]);
  }
}

console.log("\nBackwards:")
printIngredientsBackwards(ingredients);

