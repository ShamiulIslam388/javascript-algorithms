function intersection(a, b) {
  return a.filter((val) => b.includes(val));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 5];
console.log(intersection(array1, array2));
