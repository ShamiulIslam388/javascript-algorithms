// function kthlargest(arr, k) {
//   arr.sort((a, b) => b - a);
//   return arr[k - 1];
// }

function kthlargest(arr, k) {
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    sorted.push(arr[i]);
  }
  return sorted[k - 1];
}

const array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
console.log(kthlargest(array, k));
