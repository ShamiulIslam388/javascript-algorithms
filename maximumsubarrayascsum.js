function maximumsubarrayascsum(array) {
  max = 0;
  current = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      current += array[i];
    } else {
      max = Math.max(max, current);
      current = array[i];
    }
  }
  return Math.max(max, current);
}

const array = [12, 17, 15, 13, 10, 11, 12];
console.log(maximumsubarrayascsum(array));
