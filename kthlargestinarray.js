function kthlargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

const array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
console.log(kthlargest(array, k));
