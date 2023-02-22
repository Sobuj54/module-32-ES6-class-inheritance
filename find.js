const numbers = [10, 12, 45, 78, 65, 42];
// find is almost same as filter but find will only give the first matching value whereas filter will give all the matching values
const number = numbers.find((num) => num < 40);
console.log(number);
// filter
const allNumber = numbers.filter((n) => n > 40);
console.log(allNumber);

const products = [
  { id: 1, brand: "samsung", price: 20000 },
  { id: 2, brand: "asus", price: 30000 },
  { id: 3, brand: "iphone", price: 40000 },
  { id: 4, brand: "oneplus", price: 50000 },
];
const lessPrice = products.find((product) => product.price > 40000);
console.log(lessPrice);
