// double ever element of an arary
const numbers = [2, 5, 4, 3, 7];
const output = [];
for (let number of numbers) {
  const doubled = number * 2;
  output.push(doubled);
}
console.log(output);
// ----------------
// doubling every element using map and arrow function
const doubleIt = (num) => num * 2;
const doubledArray = numbers.map(doubleIt);
// this same line can also be written as
//const doubledArray = numbers.map((num) => num * 2);
console.log(doubledArray);

// -------------
// another example
const fiveTimes = [2, 5, 1, 6, 8].map((x) => x * 5);
console.log(fiveTimes);
