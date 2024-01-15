function mostFrequent(str) {
  const occurrences = {};
  str.split("").forEach((item) => {
    if (occurrences.hasOwnProperty(item)) {
      occurrences[item]++;
    } else {
      occurrences[item] = 1;
    }
  });

  return Object.keys(occurrences).reduce((prev, next) =>
    occurrences[prev] > occurrences[next] ? prev : next
  );
}

const string = "aapplications";
console.log(mostFrequent(string));
