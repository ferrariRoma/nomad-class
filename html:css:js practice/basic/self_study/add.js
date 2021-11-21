// arrow function
// 화살표 함수는 this가 없다.
// 그래서 아래의 상황에서는 this.student를
// 사용하면 외부의 group에서 가져온다.
// 새롭게 안 사실은 배열이 students이면,
// student라고도 사용할 수 있다.
// 물론 students라고 사용해도 똑같은 결과가 나온다.
let group = {
  title: "모둠",
  students: ["민수", "영희", "희승"],

  showList() {
    this.students.forEach((student) => console.log(this.title + ":" + student));
  },
};

group.showList();
