const numbers = [1, 2, 3, 4, 5];
// .reduce(accumulatorFunction , initial value)
// accumulatorFunction uses two parameters
//const total = numbers.reduce((sum, current) => sum + current, 0);
// more detailed code
const total = numbers.reduce((sum, current) => {
  summation = sum + current;
  return summation;
}, 0);
console.log(total);
