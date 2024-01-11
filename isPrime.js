const number = 754;

function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(
  number,
  isPrime(number) ? "is a prime number" : " not a prime number"
);
