var animal = {
  type: 'mammal',
  breathe: function() {
    console.log("I'm breathing");
  },
}

var dog = Object.create(animal);
var terrier = Object.create(dog);

console.log(terrier.type);                 // "mammal"
console.log(terrier.__proto__)             // {}
console.log(terrier.__proto__ === dog);    // true
console.log(Object.getPrototypeOf(terrier) === dog);    // true
console.log(terrier.__proto__ === animal); // false
console.log(Object.getPrototypeOf(terrier) === animal); // false
console.log(animal.isPrototypeOf(terrier)); // true
