const books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
  { title: "Java", author: "Shamiul" },
];

// function removeDuplicates(books) {
//   let newArray = [];

//   let uniqueObj = {};

//   for (let i in books) {
//     objectTitle = books[i]["title"];
//     uniqueObj[objectTitle] = books[i];
//   }

//   for (let i in uniqueObj) {
//     newArray.push(uniqueObj[i]);
//   }

//   return newArray;
// }

function removeDuplicates(books) {
  const unique = books.filter((obj, index) => {
    return index === books.findIndex((o) => obj.title === o.title);
  });

  return unique;
}

console.log(removeDuplicates(books));
