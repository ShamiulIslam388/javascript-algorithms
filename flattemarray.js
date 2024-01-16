function flattenarray(array) {
  const result = [];
  const stack = [...array];

  while (stack.length) {
    let lastarray = stack.pop();
    if (Array.isArray(lastarray)) {
      stack.push(...lastarray);
    } else {
      result.push(lastarray);
    }
  }

  return result.reverse();
}

// function flattenarray(array) {
//   return array.flat(Infinity);
// }

const arr = [1, [2, [3, 4, [5, 6]]]];

console.log(flattenarray(arr));
