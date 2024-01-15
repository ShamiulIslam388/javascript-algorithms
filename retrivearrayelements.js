function retrievefromarray(arr, n) {
  if (n == 0 || n > arr.length) return "too short or too long";
  const retrievedArray = [];
  for (let i = 0; i < n; i++) {
    retrievedArray.push(arr[i]);
  }

  return retrievedArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const n = 5;

console.log(retrievefromarray(array, n));
