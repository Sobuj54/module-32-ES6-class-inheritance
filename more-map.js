const numbers = [12, 56, 44, 87];
const number = numbers.map((x) => x / 3);
console.log(number);

// taking first letters form an array of string
const letters = ["sobuj", "rayhan", "ashik", "maruf", "rasel"];
const firstLetters = letters.map((names) => names[0]);
console.log(firstLetters);
// finding lengths of the names in the array
const nameLength = letters.map((name) => name.length);
console.log(nameLength);

// ---------------
// array of objects
const products = [
  { id: 1, brand: "samsung", price: 20000 },
  { id: 2, brand: "asus", price: 30000 },
  { id: 3, brand: "iphone", price: 40000 },
  { id: 4, brand: "oneplus", price: 50000 },
];
const brandName = products.map((product) => product.brand);
console.log(brandName);
