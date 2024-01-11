let exampleObj = {
  book: "Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genre: "Mystery",
};

// function iterateObject(object) {
//   Object.entries(object).map((obj) => {
//     key = obj[0];
//     value = obj[1];
//     console.log(key, value);
//   });
// }

function iterateObject(object) {
  for (let key in object) {
    console.log(key, object[key]);
  }
}

iterateObject(exampleObj);
