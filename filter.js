const numbers = [10, 12, 45, 78, 65, 42];
const moreThan = numbers.filter((number) => number > 50);
console.log(moreThan);
const lessThan = numbers.filter((num) => num < 50);
console.log(lessThan);
const even = numbers.filter((n) => n % 2 === 0);
console.log(even);
// --------------
const products = [
  { id: 1, brand: "samsung", price: 20000 },
  { id: 2, brand: "asus", price: 30000 },
  { id: 3, brand: "iphone", price: 40000 },
  { id: 4, brand: "oneplus", price: 50000 },
];
const pricy = products.filter((product) => product.price > 30000);
console.log(pricy);
