function maximumsubarraysum(array) {
  let max = 0;
  let current = array[0];
  for (let i = 1; i < array.length; i++) {
    current = Math.max(array[i], current + array[i]);
    max = Math.max(max, current);
  }

  return max;
}

const array = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maximumsubarraysum(array));
