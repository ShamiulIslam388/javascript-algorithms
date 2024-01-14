// function isValid(s) {
//   let stack = [];
//   const pMap = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   for (let char of s) {
//     if (pMap[char]) {
//       stack.push(char);
//     } else {
//       const lastopenchar = stack.pop();
//       if (char !== pMap[lastopenchar]) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

function isValid(s) {
  if (s.length % 2 !== 0 || s.length === 0) return false;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;

      if (s[i] === ")" && stack.pop() !== "(") return false;
      if (s[i] === "}" && stack.pop() !== "{") return false;
      if (s[i] === "]" && stack.pop() !== "[") return false;
    }
  }

  return stack.length === 0;
}

const expression = "()[]{}";
console.log(isValid(expression));
