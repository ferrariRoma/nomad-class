// Execution Context

// 강의: 실행 콘텍스트, 실행 콘텍스트 상태 컴포넌트

// 실행 콘텍스트

// 함수가 실행되는 영역, 묶음.
// 함수코드를 실행하고 실행 결과를 저장한다.
// 스펙상의 사양

// 실행 콘텍스트 안에는
// Lexical Environment
// Variable Environment
// This Binding
// 여기는 세 개의 컴포넌트가 있다.

/* function music(title) {
  var musicTitle = title;
}
music("음악"); */

// music으로 함수를 호출하면,
// 엔진은 실행 콘텍스트를 생성하고,
// 실행 콘텍스트 안으로 이동한다.

// 실행 콘텍스트는 실행 단계를 3가지로 나눌 수 있다.
// 준비 단계, 초기화 단계, 코드 실행 단계

// 실행 콘텍스트를 만드는 시점은
// 실행 가능한 코드를 만났을 때이다.

// 실행 가능한 코드란, 함수 코드, 글로벌 코드, eval코드를
// 말한다.

// 코드 유형을 분리한 이유는
// 실행 콘텍스트에서 처리 방법과
// 실행 환경이 다르기 때문이다.
// 즉, 엔진 관점에서 접근한 것이다.

// 함수 코드: 렉시컬 환경
// 글로벌 코드: 글로벌 환경
// eval코드: 동적 환경(문자열이기 때문에 파싱하고 해석해야 해서)

// 엔진 관점에서 보면 환경이 다르다.

// 실행 콘텍스트의 상태 컴포넌트

// 실행 콘텍스트 상태를 위한 오브젝트이다.
// 아래와 같다. 그리고 이것을 실행 콘텍스트 안에 생성한다.
/* 실행 콘텍스트(EC):{
    렉시컬 환경 컴포넌트(LEC):{...},
    변수 환경 컴포넌트(VER):{...},
    this바인딩 컴포넌트(TBC):{...},
} */

// 실행 콘텍스트 유형은 위에서 보는 바와 같다.
// 렉시컬 환경 컴포넌트(LEC)
// 변수 환경 컴포넌트(VER)
// this바인딩 컴포넌트(TBC)

// 렉시컬과 변수의 초깃값은 같은데,
// 그것은 복원을 하기 위함이다.
// 다시 돌아왔을 때 변수 환경의 초깃값을
// 렉시컬 환경에다가 설정하기 위함이다.

// 그런데 렉시컬은 정적 환경이지만,
// 글로벌 환경과 동적 환경도 같이 사용할 수 있다.
// 포맷은 같다. 하지만 처리 환경이나 세부적인 사항들이 다르지만,
// 포괄적으로 보면 렉시컬 안에서 다 처리한다.

// 강의: 렉시컬 환경 컴포넌트, 렉시컬 환경 컴포넌트 구성/
// 설정, 외부 렉시컬 환경 참조, 변수 환경 컴포넌트

// 렉시컬 환경 컴포넌트
// 함수와 변수의 식별자 해결을 위한 환경 설정
// 함수 초기화 단계에서 해석한
// 함수와 변수를 {name:value}형태로 저장한다.
// 변수들은 name:undefined의 형태로,
// 함수들은 name:function Object의 형태로.
// 이름으로 함수와 변수를 검색할 수 있게 된다.
// 즉, 식별자 해결을 할 수 있게 된다.

// 함수 밖의 함수와 변수 참조 환경 설정
// 즉, 내가 속한 오브젝트의 환경을 여기다가 설정한다.
// 따라서 렉시컬 환경 컴포넌트 안에서
// 함수 밖의 함수와 변수를 사용할 수 있게 된다.
// 하나의 컨텍스트가 된다.

// LEC 구성
// function, with, try-catch에서 생성

// 컴포넌트 구성
// 1. 환경 레코드: 함수 안의 함수와 변수를 기록
// 2. 외부 렉시컬 환경 참조: function오브젝트의 [[Scope]]를 설정

/* 렉시컬 환경 컴포넌트(LEC):{
  환경 레코드(ER):{
    // 함수 안의 함수와 변수를 기록
    point: 100
  },
  외부 렉시컬 환경 참조(OLER): {
    // function오브젝트의 [[Scope]]를 설정
    title: "책",
    getTitle: function(){}
  }
} */

// LEC의 설정
// 환경 레코드에 함수 안의 함수와 변수를 기록
// 외부 렉시컬 환경 참조에
// function오브젝트의 [[Scope]]를 설정

// 따라서 함수 안과 밖의 함수와 변수를 하나의 콘텍스트 개념으로
// 사용할 수 있게 된다.

// 외부 렉시컬 환경 참조
// 스코프와 실행중인 함수가 context형태이므로
// 스코프의 변수와 함수를
// 별도의 처리 없이 즉시 사용할 수 없다.
// 왜냐하면 위에서 보는 것처럼
// 하나의 context로 되어있기 때문에 바로바로 찾아서 쓸 수 있다.

// 실행 콘텍스트에서
// 함수 안과 밖의 함수 변수를 사용할 수 있음.
// 함수와 변수를 찾기 위해
// 실행 콘텍스트를 벗어나지 않아도 된다.

// 변수 환경 컴포넌트
// 실행 콘텍스트 초기화 단계에서
// 렉시컬 환경 컴포넌트와 같게 설정

// 이렇게 하는 이유는?
// 초깃값을 복원할 때 사용하기 위해서이다.

// 함수 코드가 실행되면
// 실행 결과를 렉시컬 환경 컴포넌트에 설정
// 이렇게 되면 변수에 여러 값들이 할당되면서
// 초깃값이 변하게 되므로 이를 유지하기 위한 것.
// with문에서 사용한다.

// 강의: 실행 콘텍스트 실행 과정, [정리 시간]

// 실행 콘텍스트 실행 과정
/* var base = 200;
function getPoint(bonus) {
  var point = 100;
  return point + base + bonus;
}
console.log(getPoint(70)); */

// 1. getPoint오브젝트의 [[Scope]]에
// 글로벌 오브젝트 설정

// 2. 마지막 줄에서 getPoint()함수 호출하면

// 3. 엔진은 실행 콘텍스트를 생성하고
// 실행 콘텍스트 안으로 이동한다.

// ----준비단계----

// 4. 컴포넌트를 생성하여 실행 콘텍스트에 첨부
// 렉시컬 환경 컴포넌트
// 변수 환경 컴포넌트
// this바인딩 컴포넌트

// 5. 환경 레코드를 생성하여
// 렉시컬 환경 컴포넌트에 첨부
// 나중에 실행할 때 함수 안의 함수, 변수를 바인딩한다.
// 지금은 준비 단계니까 빈 오브젝트이다!

// 아래는 여기까지의 모습이다.
/* 실행 콘텍스트:{
  렉시컬 환경 컴포넌트:{
    환경 레코드:{}
  },
  변수 환경 컴포넌트:{},
  this 바인딩 컴포넌트:{}
} */

// 6. 외부 렉시컬 환경 참조를 생성하여
// 렉시컬 환경 컴포넌트에 첨부하고
// getPoint function오브젝트의
// [[Scope]]에 설정된 스코프를 설정한다.
// 여기선 복사의 개념이 아니라 참조의 개념이다.

// 아래는 여기까지의 모습이다.
/* 실행 콘텍스트:{
  렉시컬 환경 컴포넌트:{
    환경 레코드:{},
    외부 렉시컬 환경 참조:{
      base:200
    }
  },
  변수 환경 컴포넌트:{},
  this 바인딩 컴포넌트:{}
} */

// ----초기화 단계----

// 6. 호출한 함수의 파라미터 값을
// 호출된 함수의 파라미터 이름에 매핑한다.
// 환경 레코드에 작성한다.
// 이것은 함수 선언문이나 변수의 초깃값을 설정하기 전에
// 진행한다.
// 70을 보너스에 매핑시키게 되고 이것을 환경 레코드에 작성한다.

// 7. 함수 선언문을 function오브젝트로 생성
// 8. 함수 표현식과 변수에 초기값 설정

// 여기까지의 상태
/* 실행 콘텍스트:{
  렉시컬 환경 컴포넌트:{
    환경 레코드:{
      bonus:70,
      point: undefined
    },
    외부 렉시컬 환경 참조:{
      base:200
    }
  },
  변수 환경 컴포넌트:{},
  this 바인딩 컴포넌트:{}
} */

// 여기까지는 외부에 실행 상태를 제공하지 않습니다.
// 이 상태에서는 엔진 내부의 처리라서
// 우리가 값을 설정하거나 다른 변화를 할 수 없다.

// ----실행단계----
// 10. 함수 안의 코드를 실행합니다.
// var point = 100;

// 11. 실행 콘텍스트 안에서 관련된
// 함수와 변수를 사용할 수 있습니다.

// 강의: 환경 레코드, 환경 레코드 구성, 글로벌 환경

// 환경 레코드를 구분하는 이유는
// 기록하는 대상에 따라 다르기 때문이다.
// 어떤 것은 선언적 환경 레코드, 어떤 것은 오브젝트
// 환경 레코드에 설정한다는 것이다.

// 선언적 환경 레코드는
// function,변수,catch문에서 사용한다.
// 앞 절에서 환경 레코드에 결정한다고 했는데
// 설명을 위한 것으로 실제로 여기에 설정

// 오브젝트 환경 레코드는
// 글로벌 오브젝트의 글로벌 함수와 변수, with문에서 사용한다.
// 이렇게 하는 것은 정적이 아니라 동적이기 때문에 그렇다.

// 글로벌 환경
// 글로벌 오브젝트에서 사용
// 렉시컬 환경 컴포넌트와 형태가 같다.
// 하지만 선언적 환경 레코드가 필요가 없어서
// 오브젝트 환경 레코드만 있다.

// 동적으로 함수와 변수 바인딩한다.
// 함수에서 var키워드를 사용하지 않고 변수를 선언하면
// 글로벌 오브젝트에 설정되기 때문이다.
// 이런 이유로 오브젝트 환경 레코드사용

// 글로벌 오브젝트는 어디 속하는 것이 아니라서
// 외부 렉시컬 참조 값은 null이다.

// 강의: this바인딩 컴포넌트

// 목적은 this로, 함수를 호출한
// 오브젝트의 프로퍼티에 악세스
// this.propertyName

// 악세스 메커니즘
// obj.book()형태에서
// this로 obj를 참조할 수 있도록,
// this바인딩 컴포넌트에 obj참조를 설정
// 복사가 아니라 참조!

// obj의 프로퍼티가 변경되면 동적으로 참조.
// 설정이 아닌 참조이기 때문!

// this 바인딩 컴포넌트
/* var obj = {point:100};
obj.getPoint = function(){
  return this.point;
}
obj.getPoint(); */

/* 실행 콘텍스트:{
  렉시컬 환경 컴포넌트={
    환경 레코드:{
      선언적 환경 레코드:{},
      오브젝트 환경 레코드:{}
    },
    외부 렉시컬 환경 참조:{}
  },
  변수 환경 컴포넌트:{},
  this 바인딩 컴포넌트:{
    point:100,
    getPoint: function(){}
  }
} */

// ----준비단계----
// 1. 마지막 줄에서 obj.getPoint()함수 호출
// 2. 실행 콘텍스트 생성
// 3. 3개의 컴포넌트 생성
// 렉시컬/변수 환경 컴포넌트, this바인딩 컴포넌트
// 4. this바인딩 컴포넌트에 getPoint()에서
// this로 obj의 프로퍼티를 사용할 수 있도록 바인딩
// 함수를 호출하는 시점에 이렇게 만들어 둔다.

// ----초기화 단계----
// 5. 파라미터, 함수 선언문, 변수 선언 없음

// ----실행 단계----
// 6. return this.point; 실행
// 7. this바인딩 컴포넌트에서 point검색
// getPoint()함수를 호출한 오브젝트가
// this바인딩 컴포넌트에 설정(참조)된 상태
// 오브젝트를 묶어놓은 것이지 프로퍼티를 묶어놓은 것은 아니다.
// 8. this 바인딩 컴포넌트에
// point프로퍼티가 있으므로 100을 반환

// ----추가 설명----
// 9. obj.getPoint()에서 obj의 프로퍼티가
// this 바인딩 컴포넌트에 바인딩 되도록
// '의도적으로' 설계해야 한다.
// this는
// objA.objB.objC.getPoint()
// 라고 하면 C를 참조하게 된다.

// 강의: 호출 스택(call stack)

// call stack은 실행 콘텍스트의 논리적 구조이다.
// 계단식으로 만드는 것이다.

// first in last out 순서이다.
// 함수가 호출되면 스택의 가장 위에
// 실행 콘텍스트가 위치한다.

// one을 호출하면 one이 가장 위에
// 위치하게 된다는 것이다.

// 다시 함수 안에서 함수를 호출하면
// 호출된 함수의 실행 콘텍스트가
// 스택의 가장 위에 놓이게 된다.

// 함수가 종료되면 스택에서 빠져 나온다.
// FILO순서로!

// 이런 논리가 된 것은 JS가 싱글 스레드이기 때문에
// 발생하는 것이다.

// 가장 아래는 글로벌 오브젝트의 함수가 위치!

/* function one() {
  two();
  console.log(1);
}
function two() {
  three();
  console.log(2);
}
function three() {
  console.log(3);
}
one(); */

// onload를 안쓰고 그냥 쓰면
// 모두 글로벌 오브젝트에 포함되게 된다.
// 이러면 찾아가기가 힘들어서
// 지역변수 안에 표시를 하기 위해서
// onload를 붙여보았다.

// 디버거에서 F9를 이용해서
// 한 단계씩 살펴보자!

/* window.onload = function () {
  "use strict";
  debugger;
  function setMain() {
    function one() {
      two();
      console.log(1);
    }
    function two() {
      three();
      console.log(2);
    }
    function three() {
      console.log(3);
    }
    one();
  }
  setMain();
}; */

// 강의: 파라미터 매핑, 함수 호출, 파라미터 값 매핑,
// -파라미터 이름에 값 매핑 방법

// 함수 호출
// 함수가 호출되면 '3개'의 파라미터 값을
// 실행 콘텍스트로 넘겨준다.

// 함수를 호출한 오브젝트,
// 함수 코드,
// 마지막으로 호출한 함수의 파라미터 값

// '함수를 호출한 오브젝트'를
// this바인딩 컴포넌트에 설정하여 this로 참조
// 함수 앞에 작성한 오브젝트를 함수는 모른다.
// 그래서 실행 콘텍스트로 넘겨줘야 this바인딩에 설정한다.

// '함수 코드'는
// function오브젝트의 [[Code]]에 설정되어 있다.
// 이것은 function키워드를 만나서 오브젝트를 만날때
// 함수 안에 작성한 코드를 [[Code]]에 설정한다.

// '호출한 함수의 파라미터 값'은
// 호출된 함수의 Argument오브젝트에 설정
// 이건 앞에서 배운 내용이다.
// 매핑을 해서 선언적 환경 레코드에 바인딩 된다.

// 호출된 함수의 파라미터 이름은
// 이미 function오브젝트에 작성되어 있다.
// 그런데 호출한 함수의 파라미터 값은
// 넘겨주지 않으면 모르니까 넘겨준다.

// 파라미터 값 매핑

// 파라미터 값 매핑이란,
// 호출'한' 함수에서 넘겨 준 파라미터 값을
// 호출'된' 함수의 파라미터 작성 '순서'에 맞춰서
// 값을 매핑하는 것

// 엔진 처리 관점
// 실행 콘텍스트로 넘겨 준 파라미터 값과
// function오브젝트의 [[FormalParameters]]에
// 작성된 이름에 값을 매핑하고
// 결과를 선언적 환경 레코드에 설정하는 것

// [[FormalParameters]]은
// 호출된 함수의 파라미터에 작성된 이름이 여기에 있다.
// function키워드를 만나서 function오브젝트를
// 설정할 때 설정된다.
// 이후 함수를 호출하면 호출한 함수가
// 실행 콘텍스트에 넘겨준 파라미터 값과
// 호출된 함수의 파라미터에 작성된
// [[FormalParameters]]의 이름을 매핑해주는 것이다.
// 그것을 레코드에 설정해주는 것이다.

/* var obj = {};
obj.getTotal = function (one, two) {
  return one + two;
};
console.log(obj.getTotal(11, 22, 77));
debugger; */

// 1. getTotal오브젝트의 [[FormalParameters]]에서
// 호출'된' 함수의 파라미터 이름을 구한다.
// 함수가 호출된 시점에서 이미 [[FormalParameters]]에
// 파라미터의 이름이 정의되어 있기 때문에
// 구할 수 있다.

// [[FormalParameters]]는
// function오브젝트를 생성할 때 설정한다.
// 배열["one","two"]형태로
// [[FormalParameters]]에 설정됨.

// 2. 저장된 배열["one","two"]을 하나씩 읽는다.

// 3. 호출한 함수에서 실행 콘텍스트에 넘겨준 값의
// index번째 값을 구한다.
// 인덱스에 값이 없으면 undefined반환

// 4. name의 파라미터 이름과 3번에서 구한 값을
// 선언적 환경 레코드에 {one:11,two:22}형태로 설정하고
// 같은 이름이 있으면 값이 대체된다.

// 5. [[FormalParameters]]에 있는 배열을 다 읽을 때까지
// 앞의 2~4과정을 반복한다.

// 여기서 77은 매핑될 파라미터 배열 값이 없는데?
// 그러나 그래도 함수 안에 작성하는 Argument오브젝트에는
// 설정이 되어있다.

// 강의: 파라미터 값 할당 기준, 정리 시간

// 파라미터 값 할당 기준
// ----초기화 단계----

/* var obj = {};
obj.getTotal = function (one, two) {
  var one;
  console.log(one + two);
  two = 77;
  console.log("two: " + two);
};
obj.getTotal(11, 22); */

// 1. obj.getTotal(11,22)함수가 호출되면
// 파라미터 값을 실행 콘텍스트로 넘겨줌.(11,22)

// 2. 파라미터 이름에 값을 매핑하여
// 선언적 환경 레코드에 설정한다.
// {one:11,two:22}

// 함수 선언문 없고~ 그럼 표현식 정리 쫙~

// 3. var one
// 우선, 선언적 환경 레코드에서 one의 존재를 체크하고
// 파라미터 이름을 설정하였으므로 존재하며,
// one을 기록하지 않습니다.
// {one:undefined}로 변환이 되지 않고
// {one:11}로 값이 유지가 된다.

// 4. two=77
// 우선, 선언적 환경 레코드에서 two의 존재를 체크하고
// 파라미터의 이름을 설정하였으므로 존재하는 것을 확인하고
// 마찬가지로 two를 기록하지 않습니다.

// 5. 함수에 초기화할 코드가 없습니다.
// 첫번째 줄로 이동하여 함수 코드를 실행합니다.

// ----실행 단계----

// 6. 선언적 환경 레코드는
// {one:11,two:22}상태

// 7. var one;
// 단지, 변수 선언이므로 처리하지 않습니다.

// 8. console.log(one+two);
// 선언적 환경 레코드에서
// one과 two의 값을 구합니다.

// 9. two = 77;
// 값을 할당하는 코드이며 실행 단계이기 때문에
// 선언적 환경 레코드의 two에 77을 할당하며
// {two:22}가 {two:77}로 변경된다.
// 변수를 선언을 할때는 아무것도 하지 않고 넘어갔지만
// 실행을 할때는 파라미터 이름도
// 하나의 프로퍼티 개념으로 접근

// 10. console.log("two: " + two);
// 선언적 환경 레코드에서 two의 값을 구한다.
// [실행 결과]에 two:77이 출력된다.
