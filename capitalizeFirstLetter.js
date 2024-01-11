const str = "i am shamiul islam";

function capitaliseFirstLetter(str) {
  let capitaliseArray = [];
  let splitArray = str.split(" ");
  for (let i in splitArray) {
    splitArray[i] =
      splitArray[i].charAt(0).toUpperCase() + splitArray[i].slice(1);
    capitaliseArray.push(splitArray[i]);
  }
  return capitaliseArray.join(" ");
}

console.log(capitaliseFirstLetter(str));
