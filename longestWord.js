// function findLongestWord(sentense) {
//   const sentenseArr = sentense.split(" ");
//   let longest = sentenseArr[0];
//   for (word of sentenseArr) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

function findLongestWord(sentense) {
  return sentense
    .split(" ")
    .reduce((longest, word) => (word > longest ? word : longest, ""));
}

console.log(findLongestWord("I am good at programming"));
