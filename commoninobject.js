function commoninObject(obj1, obj2) {
  const commoninObject2 = {};

  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      commoninObject2[key] = obj1[key];
    }
  }
  return commoninObject2;
}

let obj1 = {
  name: "Max",
  age: 29,
  degree: "CS",
};

let obj2 = {
  name: "John",
  age: 23,
  degree: "CS",
};

console.log(commoninObject(obj1, obj2));
