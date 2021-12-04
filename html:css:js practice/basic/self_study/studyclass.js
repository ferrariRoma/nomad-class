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
const example = function (a, b, c) {
  return a + b + c;
};

console.log(example(1, 2, 3));
console.log(example.call(null, 1, 2, 3));
console.log(example.apply(null, [1, 2, 3])); // 인자를 배열로

const obj = {
  string: "zero",
  yell: function () {
    alert(this.string);
  },
};

const obj2 = {
  string: "what?",
};
obj.yell();
