function mergetwosortedarray(a, b) {
  return [...a, ...b].sort((a, b) => a - b);
}

const array1 = [13, 2, 4];
const array2 = [1, 5, 2];

console.log(mergetwosortedarray(array1, array2));
