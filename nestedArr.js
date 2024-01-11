const arr = [
  [11, 2, 3],
  [1, 3, 4],
  [4, 5, 6],
];

function largetsInNestedArray(arr) {
  let largestNumber = arr[0][0];
  for (let i in arr) {
    for (let j in arr) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
  }
  return largestNumber;
}

function smallestNestedArray(arr) {
  let smallestNumber = arr[0][0];
  for (let i in arr) {
    for (let j in arr) {
      if (arr[i][j] < smallestNumber) {
        smallestNumber = arr[i][j];
      }
    }
  }
  return smallestNumber;
}

console.log(
  "Largest Number is : ",
  largetsInNestedArray(arr),
  " And Smallest Number is : ",
  smallestNestedArray(arr),
  " in the nested array"
);
