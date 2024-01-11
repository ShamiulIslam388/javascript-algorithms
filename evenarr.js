const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findEvenArr(arr) {
  let evenArr = arr.filter((element) => element % 2 === 0);
  return evenArr;
}

function findOddArr(arr) {
  let oddArr = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}

console.log(
  "Even array is : ",
  findEvenArr(arr),
  " And Odd array is : ",
  findOddArr(arr)
);
