const arr = [12, 1, 5, 90, 0];

function max(arr) {
  let max = arr[0];
  for (let i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function min(arr) {
  let min = arr[0];
  arr.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });
  return min;
}

console.log("Maximum is : ", max(arr), " and minimum is : ", min(arr));
