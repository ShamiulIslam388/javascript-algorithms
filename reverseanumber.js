// function reverseNumber(number) {
//   return Number(number.toString().split("").reverse().join(""));
// }

// reverse number in c style

function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    let reminder = number % 10;
    reverse = reverse * 10 + reminder;
    number = Math.floor(number / 10);
  }

  return reverse;
}

const number = 1234567;
console.log(reverseNumber(number));
