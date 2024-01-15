function rotateArray(array, step) {
  for (let i = 0; i < step; i++) {
    const popedEl = array.pop();
    array.unshift(popedEl);
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const step = 2;
console.log(rotateArray(array, step));
