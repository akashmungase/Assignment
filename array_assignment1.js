const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

let firstElement = fruits[0];
let lastElement = fruits[fruits.length - 1];
console.log(`1. First element: ${firstElement} and Last Element : ${lastElement}`);

fruits.unshift("Papaya");
console.log(`2. Add element Papaya before the element Banana: ${fruits}`);

// splice method can be used to add or remove element from an array
// the first argument specifies the location at which to being adding or removing element
// the second argument specifies the number of element to remove
fruits.splice(4,1);
console.log(`3. Remove Mango From the array: ${fruits}`);

fruits.push("Pineapple");
console.log(`4. Add element Pineapple at last position: ${fruits}`);

fruits.splice(4, 0, "Dragon Fruit");
console.log(`5. Insert an element Dragon Fruit before Water Melon: ${fruits}`);

fruits.splice(2, 1, "Kiwi");
console.log(`6. Replace an element Orange with Kiwi: ${fruits}`);

console.log(`7. ${fruits.length}`);

const elementStartingForm1To4 = fruits.slice(1,4);
console.log(`8. Element starting from index 1 to 4: ${elementStartingForm1To4}`);

const lastThreeElement = fruits.slice(4);
console.log(`9. Last three element: ${lastThreeElement}`)

for (const element of fruits) {
    console.log(element);
}