// function mergetwosortedarray(a, b) {
//   return [...a, ...b].sort((a, b) => a - b);
// }

// function mergetwosortedarray(a, b) {
//   const mergedArray = [];
//   const sortedArray = [];

//   for (let i = 0; i < a.length; i++) {
//     mergedArray.push(a[i]);
//   }
//   for (let i = 0; i < b.length; i++) {
//     mergedArray.push(b[i]);
//   }

//   for (let i = 0; i < mergedArray.length; i++) {
//     for (let j = i + 1; j < mergedArray.length; j++) {
//       if (mergedArray[i] > mergedArray[j]) {
//         let temp = mergedArray[i];
//         mergedArray[i] = mergedArray[j];
//         mergedArray[j] = temp;
//       }
//     }
//     sortedArray.push(mergedArray[i]);
//   }

//   return sortedArray;
// }

//need to sorted two arrays first then sort them
function mergetwosortedarray(a, b) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      mergedArray.push(a[i]);
      i++;
    } else {
      mergedArray.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    mergedArray.push(a[i]);
    i++;
  }

  while (j < b.length) {
    mergedArray.push(b[j]);
    j++;
  }

  return mergedArray;
}

const array1 = [2, 4, 13];
const array2 = [1, 2, 5];

console.log(mergetwosortedarray(array1, array2));
