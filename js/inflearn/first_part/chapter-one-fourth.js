// 강의: 프로퍼티 개요, 프로퍼티 추가/변경
// value에 js에서 지원하는 타입
// Number, String, Boolean, Object
// function까지~
const book = {
  title: "책", // 스트링
  point: {
    // Object를 사용해서 프로퍼티를 확장
    ten: 10, // 숫자
    bonus: true, // boolean
    promotion: function () {}, // 함수까지
  },
};
// Object는 객체라고도 부름

// 오브젝트에 프로퍼티 추가, 변경
/* var obj = {};

obj.abc = 123;
obj["def"] = "456";
var varName = "title";
obj[varName] = "HTML책";
console.log(obj);

delete obj.abc;
console.log(obj); */
