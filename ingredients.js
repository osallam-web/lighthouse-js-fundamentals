const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("The ingredients are:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("The ingredients are:");
i=0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}


console.log("The ingredients are:");
ingredients.reverse();
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}