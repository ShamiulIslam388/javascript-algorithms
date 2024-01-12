// function compareTwoObjects(obj1, obj2) {
//   const object1 = JSON.stringify(obj1);
//   const object2 = JSON.stringify(obj2);

//   return object1 === object2;
// }

function compareTwoObjects(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

let obj1 = {
  name: "John",
  age: 235,
  degree: "CS",
};

let obj2 = {
  name: "John",
  age: 23,
  degree: "CS",
};

console.log(compareTwoObjects(obj1, obj2));
