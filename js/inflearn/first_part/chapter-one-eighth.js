// 강의: Function오브젝트의 프로퍼티 리스트, Function인스턴스 생성

// new Function()
// Function인스턴스 생성
// 파라미터에 문자열로 함수의 파라미터와 함수 코드 작성
/* const obj = new Function("book", "return book;");
// 함수의 파라미터와 함수 코드 작성
obj("JS 책"); */

// 파라미터 수에 따라 인스턴스 생성 기준이 다르다.
// 파라미터 2개 이상 작성=>마지막 파라미터에 함수에서 실행할 함수 코드 작성
// 마지막을 제외한 파라미터에 이름 작성
/* const obj = new Function("one", "two", "return one+two;");
// 파라미터가 3개
// 이때 마지막 파라미터는 함수 블록에 코드,
// 나머지 파라미터는 함수의 파라미터가 된다.
console.log(obj(100, 200)); */

// 파라미터 하나를 작성하면,
// 함수에서 실행할 함수 코드 작성
// 파라미터가 없을때 사용
/* const obj = new Function("return 1+2;");
console.log(obj()); */

// 파라미터를 작성하지 않으면
// 함수 코드가 없는 Function 인스턴스 생성

// Function()
// 인스턴스를 생성하는 건 같지만 new를 안쓴다는 차이
// 처리방법과 파라미터 작성이 new와 같다.

// 강의: 함수 생명 주기, 함수 분류, length프로퍼티

// 함수 분류

// function 분류
// 빌트인 function오브젝트,
// function오브젝트,-> 빌트인 이용해서 만듦
// function인스턴스(new연산자 사용)->new연산자를 사용

// function 오브젝트 생성 방법
// function 키워드를 사용
// function getBook(title){return title};
// 이렇게 하면 getBook의 이름을 가진 function 오브젝트가 생성

// JS엔진이 function키워드를 만나면,
// 이름이 getBook인 function 오브젝트 생성

// 함수 생명 주기
// 함수 호출
// 함수 코드 실행->js 엔진 컨트롤이 함수의 처음으로 이동
// 호출한 함수에서 넘겨준 파라미터 값을
// 호출된 함수의 파라미터로 설정함

// length 프로퍼티
// 함수의 파라미터 수가
// 생성되는 function오브젝트에 설정됨
/* function add(one, two) {
  return one + two;
}
console.log(add.length); */

// length는 add에서 바로 엑세스 할 수 있다.
// add가 오브젝트이므로 function오브젝트이지만
// 오브젝트이기 때문에 .프로퍼티-네임

// 호출받는 함수의 프로퍼티 갯수 기준

// 강의: 함수 형태

// 함수 형태

// 함수 선언문
// function getBook(book){코드}

// 함수 표현식
// var getBook = function(book){코드}
// js엔진이 function 키워드를 만나면
// function오브젝트를 만들고 getBook에 할당하게 됨
// 고로, getBook은 함수 이름이면서 function 오브젝트임
// 함수 표현식은 할당 연산자를 이용하는 것임

// 함수 표현식은 조금 다르게도 사용할 수 있다.
/* const getBook = function inside(value) {
  if (value === 102) {
    return value;
  }
  console.log(value);
  return inside(value + 1);
};
getBook(95); */

// 이 방법을 사용하면 inside이름으로 function오브젝트를
// 생성하여 getBook변수에 할당

// 하지만 표현식에서 'function 이름()'
// 이렇게 사용하면
// inside는 함수 '내'에서만 호출을 할 수 있다.
// 그래서 함수 외부에서 inside를 호출할 수 없으며,
// getBook()을 호출하여 함수 안으로 이동한 후
// inside()를 호출할 수 있다.

// 여기서 주의를 해야할 부분이
// 함수 안에서 inside를 호출하는 것은
// 자신을 호출하는 것이므로 무한으로 반복하여 호출하게 된다.
// 그래서 함수가 종료되도록 조취를 취해야 한다.
// 이런 함수가 C에서도 배웠던 재귀 함수이다.

// 함수를 왜 이렇게 2가지 방법으로 선언을 할까?
// 함수 선언문이 먼저 function오브젝트를 만들고
// 그 다음에 함수 표현식으로 function오브젝트를 만든다.

// 강의: 함수 호출

// call() 메소드
// getTotal.call(this, 10, 20);
// 첫번째 파라미터
// 호출된 함수에서 this로 참조할 오브젝트
// 첫번째 외의 파라미터는 opt
/* function getTotal(one, two) {
  return one + two;
}
const result = getTotal.call(this, 10, 20);
console.log(result); */

/* const obj = { one: 100, two: 30 };
function getTotal(one, two) {
  return this.one + this.two;
}
const result = getTotal.call(obj);
console.log(result); */

// 여기서 call의 특징을 볼 수 있는데,
// call의 특징은 두번째 파라미터부터 넘어간다.
// 첫번째 파라미터에 들어가는 것은 일반적으로 this사용
// 다른 오브젝트 작성 가능
/* const value = { one: 10, two: 20 };
function getTotal() {
  return this.one + this.two;
}
const result = getTotal.call(value);
console.log(result); */

// getTotal.call(value);에서
// value는 this가 들어갈 자린데
// 이는 return this.one + this.two;에서 this가
// value, 즉 value오브젝트를 참조한다는 것이다.
// 그래서 this.one에 10, this.two에 20이 들어가는 것이다.

// apply()
// 얘는 call과 같은데, 단지 두번째 파라미터를 배열로
// 해야 한다는 것이다.
// 배열이기 때문에 element갯수에 상관없다.
// 고로, 파라미터 수가 유동적일 때 사용
// call은 파라미터 수가 고정적일 때 사용
/* function getTotal(one, two) {
  return one + two;
}
const result = getTotal.apply(this, [10, 20]);
console.log(result); */

// call과 apply의 부가적인 목적은
// 첫번째 파라미터에
// 호출된 함수에서 this로 참조할 오브젝트를 사용

// toString()
// 모든 빌트인 오브젝트에 toString가 있지만
// 오브젝트마다 반환되는 형태가 다름
// function오브젝트의 toString()은
// 함수 코드를 문자열로 반환
/* const getBook = function () {
  return 100 + 23;
};
const result = getBook.toString();
console.log(result);
console.log(typeof result); */

// Argument 오브젝트
// function오브젝트에 속해있지는 않지만
// 함수를 호출하면 Argument오브젝트를 생성하기 때문에
// 여기서 다룬다.

// 함수가 호출되어 함수 안으로 이동했을 때
// arguments이름으로 생성되는 오브젝트
// 함수를 호출한 곳에서 넘겨 준 값을 순서대로 저장

// 호출한 함수에 파라미터를 작성한 경우
// 호출된 함수의 파라미터에도 값을 설정하고
// 아규먼트 오브젝트에도 저장
/* function getTotal(one) {
  return one + arguments[1] + arguments[2];
  // 
}
const result = getTotal(10, 20, 30);
// 1. getTotal함수 작성.
// 2. one을 파라미터로 작성
// 3. 함수 호출
// 4. 10, 20, 30을 넘겨줌
// 5. Argument오브젝트를 생성해서
// 6. arguments프로퍼티에 파라미터에 넘겨준 10,20,30을
// 7. arguments[0] arguments[1] arguments[2]순서대로 할당
console.log(result); */

// apply()와 아규먼트 오브젝트
/* function getTotal(one) {
  return one + arguments[1] + arguments[2];
  //
}
const result = getTotal.apply(this, [10, 20, 30]);
console.log(result); */

// 파라미터라고 부른 것은
// 아규먼트 오브젝트와 구분하기 위한 것

// arguments[1]에서 1은 프로퍼티다.
// argument오브젝트도 오브젝트이기 때문에.

// 함수가 실행된 후에 함수를 빠져나오면
// 아규먼트 오브젝트도 자동으로 삭제됨.
// 그래서 함수 밖에서 아규먼트 오브젝트에 접근할 수 없음.
