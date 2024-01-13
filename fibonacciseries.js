// function fibonacci(number) {
//   const series = [0, 1];
//   for (let i = 2; i < number; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series;
// }

// sum of fibonacci numbers
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

function fibonacci(n) {
  let f = [];
  let sum = 0;
  f[0] = 0;
  f[1] = 1;
  sum = f[0] + f[1];

  for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
    sum += f[i];
  }
  return sum;
}

console.log(fibonacci(5));
