function something(x, y) {
  const res = [];

  for (let i = x; i <= y; i++) {
    let num = i;
    let isDivisible = true;

    while (num > 0) {
      const digit = num % 10;
      if (digit === 0 || i % digit !== 0) {
        isDivisible = false;
        break;
      }
      num = Math.floor(num / 10);
    }

    if (isDivisible) {
      res.push(i);
    }
  }

  return res;
}

console.log(something(1, 22));
