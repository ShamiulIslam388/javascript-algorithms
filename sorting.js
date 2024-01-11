const arr = [2, 3, 1, 4, 5, 0, 10];

function sortingArray(arr) {
  let sortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    sortedArray.push(arr[i]);
  }
  return sortedArray;
}

console.log(sortingArray(arr));
