function isValid(s) {
  let stack = [];
  const pMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (pMap[char]) {
      stack.push(char);
    } else {
      const lastopenchar = stack.pop();
      if (char !== pMap[lastopenchar]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const expression = "((()))";
console.log(isValid(expression));
