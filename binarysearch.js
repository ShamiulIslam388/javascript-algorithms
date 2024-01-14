function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) return mid;
    if (item < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const item = 9;

console.log(
  binarySearch(array, item) === -1
    ? "Item not found"
    : `Item found at index ${binarySearch(array, item)}`
);
