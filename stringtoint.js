function stringToint(s) {
  const onlynum = s.replace(/[a-z]/gi, "").trim();
  return parseInt(onlynum, 10);
}

const string = "words and 987";
console.log(stringToint(string));
