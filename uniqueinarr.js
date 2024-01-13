function uniqueArr(array) {
  const unique = array.filter((arr, index) => {
    return index === array.findIndex((a) => a === arr);
  });

  return unique;
}

// function uniqueArr(array) {
//   return [...new Set(array)];
// }

console.log(uniqueArr([1, 2, 3, 5, 3, 1, 9]));
