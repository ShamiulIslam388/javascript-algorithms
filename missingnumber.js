//mi

function missingNumber(array) {
  const n = array.length;
  const actualsum = (n * (n + 1)) / 2;
  const totalsum = array.reduce((acc, val) => acc + val, 0);
  return actualsum - totalsum;
}

//missing number range [1, n]

// function missingNumber(array) {
//   const n = array.length;
//   const actualsum = ((n + 1) * (n + 2)) / 2;
//   const totalsum = array.reduce((acc, val) => acc + val, 0);
//   return actualsum - totalsum;
// }

// const array = [1, 2, 4, 6, 3, 7, 8];
const array = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(array));
