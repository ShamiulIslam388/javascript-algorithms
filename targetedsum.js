function targetedSum(arr, targetedSum) {
  for (let i in arr) {
    for (let j in arr) {
      if (arr[i] + arr[j] == targetedSum) {
        return [i, j];
      }
    }
  }
}

// function targetedSum(arr, targetSum) {
//   const map = new Map();
//   for (let i in arr) {
//     const complement = targetSum - arr[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i], i);
//   }
//   return null;
// }

const array = [2, 7, 15, 10];
const target = 12;
console.log(targetedSum(array, target));
