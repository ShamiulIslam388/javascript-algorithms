function divisibleBydigit(number) {
  let newNumber = number;
  let isdivisible;

  while (newNumber > 0) {
    const digit = newNumber % 10;
    if (number % digit === 0) {
      isdivisible = true;
    } else {
      return (isdivisible = false);
    }
    newNumber = Math.floor(newNumber / 10);
  }
  return isdivisible;
}

function rangeOfnumberdivisibleBydigit(x, y) {
  const res = [];
  for (let i = x; i <= y; i++) {
    if (divisibleBydigit(i)) {
      res.push(i);
    }
  }

  return res;
}

console.log(rangeOfnumberdivisibleBydigit(10, 22));
