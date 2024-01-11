const str = "abba";

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse(str));

function palindrome(str) {
  return str === reverse(str);
}

console.log(palindrome(str));
