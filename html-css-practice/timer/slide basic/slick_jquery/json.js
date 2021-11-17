const rabbit = {
  name: "tori",
  color: "white",
  size: "null",
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

console.log(rabbit);

// const json = JSON.stringify(rabbit);
// console.log(json);

// let temp = JSON.stringify(rabbit, ["name", "color"]);
// console.log(temp);

// temp = JSON.stringify(rabbit, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`);
//   return key === "name" ? "wayne" : value;
// });
// console.log(temp);
console.clear();

const json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
// rabbit.jump();
// obj.jump();

// console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());
// console.log(typeof obj.birthDate);
