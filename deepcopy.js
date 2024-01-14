const person = {
  name: "John",
  age: 30,
};

// const person2 = { ...person };

const person2 = JSON.parse(JSON.stringify(person));

person2.name = "Jain";
person2.age = 35;

console.log(person, person2);
