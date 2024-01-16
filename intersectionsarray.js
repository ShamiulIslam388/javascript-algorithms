// function intersection(a, b) {
//   return a.filter((val) => b.includes(val));
// }

function intersection(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    // for (let j = 0; j < b.length; j++) {
    //   if (a[i] === b[j]) result.push(a[i]);
    // }
    if (b.includes(a[i])) result.push(a[i]);
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 5];
console.log(intersection(array1, array2));
