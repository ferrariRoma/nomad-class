function Person(name, sex) {
  this.name = name;
  this.sex = sex;
  /* this.sayHello = function () {
    alert(this.name + ' said "hello"');
  }; */
  this.sayHello = () => console.log(this.name + ' said "hello"');
}

const zero = new Person("zero", "m");
const hero = new Person("hero", "f");

// 화살표 함수 예제
/* const sum = function (a, b) {
  return a + b;
};
alert(sum(4, 4));
 */

const group = {
  title: "모둠1",
  students: ["소찬", "양현", "찬형"],
  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};

const member = {
  title: "2모둠",
  groups: ["가나", "뚜띠", "모르"],
  showGroup() {
    this.groups.forEach(function (group) {
      console.log(this.title + ":" + group);
    });
  },
};

// 화살표 함수 기본 js연습문제
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

/* ask(
  "동의하십니까?",
  function () {
    alert("동의하셨습니다.");
  },
  function () {
    alert("취소 버튼을 누르셨습니다.");
  }
); */

// 함수의 메소드와 arguments example
/* const TriplePlus = function (a, b, c) {
  return a + b + c;
};

const obj = {
  string: "zero",
  yell: function (a, b, c) {
    alert(this.string + a + b + c);
  },
};

const obj2 = {
  string: "what?",
};

const yell2 = obj.yell.bind(obj2)(1, 2, 3);

function exArguments() {
  console.log(arguments);
}

function exArgumentsSecond() {
  console.log(Array.prototype.join.call(arguments));
}

function ArgumentsEx() {
  console.log(Array.prototype.join.call(arguments, "Er"));
} */

// 실행 컨텍스트
var name = "zero"; // (1)변수 선언 (6)변수 대입
function wow(word) {
  // (2)변수 선언 (3)변수 대입
  console.log(word + " " + name); // (11)
}
function say() {
  // (4)변수 선언 (5)변수 대입
  var name = "nero"; // (8)
  console.log(name); // (9)
  wow("hello"); // (10)
}
// say(); // (7)

// 함수의 범위(scope) - scope chain, lexical scoping
const counter = function () {
  let count = 0;
  function changeCount(number) {
    count += number;
  }
  return {
    increase: function () {
      changeCount(1);
    },
    decrease: function () {
      changeCount(-1);
    },
    show: function () {
      alert(count);
    },
  };
};

// extend
/* function Vehicle(name, speed) {
  this.name = name;
  this.speed = speed;
}
Vehicle.prototype.drive = function () {
  console.log(this.name + " runs at " + this.speed);
};
const tico = new Vehicle("tico", 50);
tico.drive();

function Sedan(name, speed, maxSpeed) {
  Vehicle.apply(this, arguments);
  this.maxSpeed = maxSpeed;
}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function () {
  console.log(this.name + " boosts its speed at " + this.maxSpeed);
};
const sonata = new Sedan("sonata", 100, 200);
sonata.drive();
sonata.boost();

function Truck(name, speed, capacity) {
  Vehicle.apply(this, arguments);
  this.capacity = capacity;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.load = function (weight) {
  if (weight > this.capacity) return console.error("너무 무거워요!");
  else return console.log("짐을 실었습니다!");
};
const boongboong = new Truck("boongboong", "40", "500");
boongboong.drive();
boongboong.load(600); */

// Review extent

// function Vehicle(name, speed) {
//   this.name = name;
//   this.speed = speed;
// }
// Vehicle.prototype.drive = function () {
//   console.log(this.name + ": " + this.speed + "속도로 이동 중!");
// };

// const tabaco = new Vehicle("tabaco", 100);
// tabaco.drive();

// function Sedan(name, speed, maxspeed) {
//   Vehicle.apply(this, arguments);
//   this.maxspeed = maxspeed;
// }
// Sedan.prototype = Object.create(Vehicle.prototype);
// Sedan.prototype.constructor = Sedan;
// Sedan.prototype.boost = function () {
//   console.log(
//     this.name + ": 부스터를 사용해서 " + this.maxspeed + "속도로 이동 중!"
//   );
// };
// const sonata = new Sedan("Sonata", 200, 300);
// sonata.drive();
// sonata.boost();

// function Truck(name, speed, capacity) {
//   Vehicle.apply(this, arguments);
//   this.capacity = capacity;
// }
// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;
// Truck.prototype.load = function (weight) {
//   if (weight > this.capacity) return console.log("중량 초과!!!");
//   else console.log("적재 완료!!!");
// };
// const bonggo = new Truck("Bonggo", 150, 300);
// bonggo.drive();
// bonggo.load(300);

// getter and setter
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  // set fullName(value) {
  //   [this.name, this.surname] = value.split(" ");
  // },
};
console.log(user.fullName);
user.fullName = "wayne jay";
console.log(user.fullName);
console.log(user.name);
console.log(user.surname);
for (let key in user) console.log(key);
