function countdown(n) {
  const countdownArr = [];
  for (let i = n; i > 0; i--) {
    countdownArr.push(i);
  }
  return countdownArr;
}

console.log(countdown(5));
