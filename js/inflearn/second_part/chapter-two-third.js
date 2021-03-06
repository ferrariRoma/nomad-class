// Argument

// 강의: Argument처리 메커니즘, Argument처리구조,
// -엔진의 파라미터 처리

// Argument처리구조

/* function get() {
  return arguments;
}
console.log(get("A", "B")); */
// 함수가 호출되면 우선, 아규먼트 오브젝트를 만든다.
// 그리고 거기에
// 파라미터를 {key:value}형태로 저장
// 근데 파라미터만 적었으니까 key가 없잖아?
// 그래서 0부터 해서 인덱스를 부여한다.
// 그래서 파라미터 수만큼 0부터 인덱스 부여해서
// key로 사용한다.
// 파라미터로 받은 값을 value에 설정
// {0:param1, 1:param2}

// 이 형태를 Array-like라고 한다.
// 반드시 key값이 0부터 1씩 증가한다.
// 그리고 length 프로퍼티가 있다.
// 그리고 length가 있다는 것은 for문으로 돌릴 수 있다는 것이다.
// 아마 그래서 배열처럼 for문을 사용할 수 있으니까
// Array-'like'라고 한 것 같다.
// 프로퍼티지만 Array처럼 처리할 수 있다는 뜻이겠지?

// 엔진의 파라미터 처리
/* const get = function (one) {
  return one;
};
get(77, 100); */

// 1. get()함수를 호출하면서
// 77과 100을 파라미터 값으로 넘겨 준다.

// 2. 넘겨 받은 값을 함수의 파라미터 이름에 설정(맵핑)
// 정적환경의 선언적 환경 레코드에 아래와 같은 형태로 설정
// one:77
// 스코프 개념으로 정의을 하는 것이다.
// 따라서 return one(표현식)을 했을 때
// 표현식을 평가하게 되는데(식별자 해결 단계),
// 이때 선언적 환경 레코드에서 one을 찾아서
// 77을 리턴해준다.
// 이게 식별자 해결과 선언적 환경 레코드의 역할이다.

// 3. Argument오브젝트를 생성합니다.
// 이것은 파라미터로 받은 모~든 값을 설정하는 것이다.(앞에서 배움)
// -> 아하! 실행 콘텍스트에 설정 후에
// Argument오브젝트를 설정하는구나!

// 4. 넘겨받은 파라미터 수를
// Argument오브젝트의 length프로퍼티에 설정
// 'Array-like'

// 5. 넘겨받은 파라미터 수만큼 반복하면서
// 0부터 key로 하여 순서대로 파라미터 값을 설정
// {0:77},{1:100}형태가 된다.

// 6. 함수의 초기화 단계에서 실행
// 즉, 함수 안에서 환경을 설정하는 단계에서 진행

/**
 * ----------------------------------
 * ----------------------------------
 * ----------------------------------
 * ----------------------------------
 * ----------------------------------
 * ----------------------------------
 * ----------------------------------
 * ---------------------------------- **/

// 스코프

// 강의: 스코프 목적, 스코프 설정

// 스코프의 목적

// 범위를 제한하여
// 식별자를 해결하려는 것이다.
// 스코프(영역)에서 식별자를 해결

// 식별자 해결이란
// 변수이름, 함수이름을 찾는 것이다.

// '어디서 찾아야 될까?'라는 질문을 할 때,
// 이때 스코프를 사용한다.

// 이름을 찾게 되면 값을 구할 수 있다.
// 이게 식별자 해결의 궁극적 목적이다. "이름을 찾는 것!"
// 크게는 이름을 설정하는 것도 식별자 해결이다.
// 등록과 검색의 행위로 나눌 수 있다. => 식별자 해결

// 고로, 스코프는 식별자 해결을 위한 것

// 스코프 설정
/* function book() {
  const point = 123;
  function get() {
    console.log(point);
  }
  get();
}
book(); */

// 1. 엔진이 function book(){}을 만나면,

// 2. function오브젝트를 생성하고
// (엔진이 최초의 함수 선언문을 확인하고 동작)

// 3. 스코프를 설정합니다.
// 생성한 function 오브젝트의 내부 프로퍼티인
// [[Scope]]에 스코프를 설정한다.
// 즉, 이때 스코프가 결정된다.
// -> 스코프는 function오브젝트가 생성되고 바로 되는구나!

// function키워드를 확인하고,
// function오브젝트를 만드는 시점에 스코프를 결정하는 것을
// 정적 스코프라고 한다.

// 반면 함수를 호출할 때 스코프를 설정하는 것이
// 동적 스코프라고 한다.

// 4. 마지막 줄에서 book()함수를 호출한다.

// 5. 엔진 컨트롤이 book함수 안으로 이동한다.
// 여기서 book()함수를 호출하게 되면
// 함수 안에서 함수 선언문을 찾는다.
// 이후 get function오브젝트를 생성한다.
// -> 이때 실행 콘텍스트가 만들어진다!!

// 6. 스코프를 설정합니다.
// function오브젝트의 [[Scope]]에 스코프를 설정한다.
// 이때 스코프가 결정된다.
// -> 정확히는 function오브젝트를 생성하고 설정됐던 Scope를
// 만들어진 실행 콘텍스트 안에 설정한다! 이때는 참조의 형태이고
// [[Scope]]에서 확인할 수 있다.

// 7. get() 함수를 호출한다.

// 강의: Global오브젝트, 글로벌 오브젝트 특징

/* var value = 100;
function book() {
  var point = 200;
  return value;
}
book(); */

// var value = 100에서
// 100을 value변수에 할당한 것은
// value로 검색하여 값을 사용하기 위한 것이다.

// 함수 안에 변수를 선언하면,
// 변수가 함수에 속하게 되지만

// value변수는 함수 안에 작성되어 있지 않음.
// value변수가 속하는 오브젝트가 없으며
// 이때, 글로벌 오브젝트에 설정됩니다.

// 이런 메커니즘을 구현할 수 있는 것은
// 글로벌 오브젝트가 하나만 있기 때문이다.

// 오브젝트가 하나이므로 굳이 오브젝트를 작성하지 않더라도
// 글로벌 오브젝트에 속하게 해준다는 것은 좋았었다.
// 지금은 굉장히 많은 오브젝트를 사용하게 되고
// 약간의 문제가 발생하긴 하지만,
// 그래도 오브젝트가 없을때는
// 글로벌 오브젝트에 속하게 해준다는 것은
// 그 접근이 괜찮았다.

// 글로벌 오브젝트의 특정
/* var value = 100;
function book() {
  return value + 50;
}
book();
// <다른 파일>
console.log(value);
console.log(book()); */
// -> 다른 파일에서도 global오브젝트에 설정된
// 변수들을 사용할 수 있었다.
// global오브젝트 {vlaue:100,book:function(){}}

// js소스 파일 전체에서
// 글로벌 오브젝트는 하나만 있다.
// new 연산자로 인스턴스 생성 불가

// js소스 파일 전체를 기준은
// <script>에 작성된 모든 코드이다.
// 모든 코드에서 사용 가능

// 다른 파일의 코드에서
// 글로벌 오브젝트에 작성된 변수 value 값을 출력하고
// book()함수를 호출할 수 있다.

// 강의: Global 스코프

// 글로벌 오브젝트가 글로벌 스코프이다.
// 왜냐하면 글로벌 오브젝트가 하나 밖에 없기 때문에,
// 스코프도 글로벌 스코프가 하나만 있는 것이다.

// 오브젝트는 개발자 관점으로
// 오브젝트에 함수와 변수를 작성한다.
// 즉, 함수와 변수를 작성하기 위해서는 오브젝트가 있어야 한다.
// 글로벌 오브젝트는 오브젝트가 없지만 호스트 오브젝트 개념으로
// window 오브젝트를 글로벌 오브젝트로 사용한다.

// 글로벌 오브젝트에 변수, 함수가 작성되어야 하지만
// 호스트 오브젝트 개념으로 window오브젝트에 설정된다.
// <용어 복습>
// 호스트라고 하믄,
// DOM에서는 js가 사용할 수 있는 형태로 함수들을 제공하고
// js는 그것을 마치 js스펙에 정의된 것 마냥 사용할 수 있다.
// 호스트의 개념이다.

// 스코프는 식별자 해결을 위한 것으로
// 엔진의 관점이다. 엔진이 식별자 해결을 위해서
// 스코프를 사용한다.
// 개발자는 함수와 변수를 작성하기 위해서
// 오브젝트를 사용하는 것이다.

// -> 엔진은 식별자 해결을 위해 스코프를 사용하고,
// 사용자는 함수와 변수를 작성하기 위해 오브젝트를 사용한다.
// 즉, 관점의 차이라고 볼 수 있다.

// 글로벌 스코프는 최상위 스코프이다.
// 함수에서 보면 최종 스코프이다.

// A{B{C}}일때 C스코프에 없으면
// B스코프, A스코프로 찾아서 계속 올라갈 때
// 마지막에 만나는 것이 글로벌 스코프라는 것이다.

// 이처럼 스코프는 식별자 개념으로 접근한 것이고,
// 오브젝트는 함수와 변수의 작성 개념으로 접근한 것이다.

// 이렇게 이야기 한 이유는 글로벌 스코프는 하나니까
// 글로벌 오브젝트로 볼 수 있다. 하지만 그것은 관점이 다르다.
// 는 것을, 목적이 다르다는 것을 알려준 것이다.

// 글로벌 스코프
/* var value = 100;
function book() {
  return value;
}
book(); */

// function book(){}를 만나면
// book함수가 속한 오브젝트가 없기 때문에
// book함수가 글로벌 오브젝트에 설정한다.
// 글로벌 함수이다.

// var value = 100;
// value변수가 글로벌 오브젝트에 설정
// 글로벌 변수

// 글로벌 오브젝트에 설정된다는 것은 오브젝트 관점이다.

// 스코프와 식별자 해결 관점에서 본다면,
// Scope가 글로벌 스코프라는 것이다.

// book()함수를 호출하려면
// 오브젝트.book() 형태로 작성해야 한다.
// 그런데 오브젝트를 작성하지 않고 함수만 작성했음.
// 오브젝트를 작성하지 않으면
// 글로벌 오브젝트를 "오브젝트"로 간주.
// 글로벌 오브젝트가 실체가 없지만
// 호스트 오브젝트 개념으로 윈도우를 사용하는데,
// window오브젝트의 book()함수를 호출한다고 볼 수 있다.

// book()을 호출하려면 식별자 해결을 해야 하는데,
// 이를 위해서는 스코프가 필요하다.
// 위의 코드는 글로벌 스코프에 작성이 되어 있으니까
// 글로벌 스코프에서 book을 찾아서(식별자 해결) 호출하게 된다.

// 글로벌 스코프와 오브젝트는 같다. 하지만 그 개념과 접근법,
// 목적이 다르다.

// 강의: 스코프 바인딩, 정적/동적 바인딩, 바인딩 시점의 중요성

// 바인딩
// 구조적으로 결속된 상태로 만드는 것이다.
// 대상: 프로퍼티 이름
// 값은 변하지만 이름은 변하지 않기 때문이다.

// 목적은
// 스코프를 설정하고 식별자를 해결하기 위함이다.

// -> 바인딩은 프로퍼티 이름을 구조적으로 결속된 상태로 만드는 것이구나!
// 값은 변하니까! 근데 왜? 스코프를 설정하고 이를 통해서 식별자를 해결하기 위해서!
// 즉, 스코프를 형성하는 과정이 바인딩이라고 할 수도 있겠군!

// 바인딩 시점을 구분하면
// 정적 바인딩과 동적 바인딩이 있다.
// 스코프가 렉시컬, 다이나믹 스코프로 나누어 지는 것과 같다.

// 정적, 동적 바인딩

// 정적 바인딩은
// 함수가 호출 되었을 때 초기화 단계에서 바인딩을 한다.
// 함수 선언문 이름을 바인딩한다.
// 표현식(변수,함수) 이름을 바인딩
// JS는 대부분 정적 바인딩을 한다.

// 동적(다이나믹) 바인딩을 하는게 있는데,
// 이것은 실행할 때 바인딩을 하는 것이다.
// eval()함수와 with문이 있다.

// 바인딩 시점, 이게 왜 중요할까?
// 바인딩 시점이 중요한 이유는 바인딩 할때 스코프가
// 결정되기 때문이다.

// function 오브젝트 생성 시점에 스코프가 결정된다.
// 스코프를 function 오브젝트의 [[Scope]]에 설정
// 스코프가 변경되지 않음.
// (이때는 생성된 function오브젝트의
// 내부 프로퍼티에 scope가 형성되어 있음)
// 한 번 설정을 해놓으면 변경되지 않는다.
// 그래서 정적 스코프인 것이다.

// 함수 안의 모든 함수의 스코프가 같다.

// 스코프 바인딩
/* function book(){
    cosnt point = 100;
    function add(param){
        point+=param;
    }
    const get = function(){
        return point;
    }
    add(200);
    console.log(get());
}
book(); */

// 1. 마지막 줄에서 book()함수 호출
// 초기화 단계에서 함수에서 함수와 변수의 이름을
// 선언적 환경 레코드에 바인딩
// 발음 편의를 위해 DER을 레코드라고 부른다.

// -> 이렇게 호출을 하면 함수 내부로 들어가면서
// 그 시점에 실행 콘텍스트를 생성한다.

// 2. function add(param){...} => 선언문
// function 오브젝트 생성
// add 함수가 속한 스코프(영역)를
// add 오브젝트의 [[Scope]]에 설정
// add 이름을 레코드에 바인딩

// 3. var point =100;  => 표현식
// point '이름'을 레코드에 바인딩

// 4. const get = function(){...} => 함수 표현식
// get 이름을 레코드에 바인딩

// 5. 바인딩으로 함수와 변수의 식별자가 해결됨.
// 여기서부터는 변수 이름이 없어서 에러가 나지 않게 된다.

// ----코드 실행----

// 6. var point = 100;
// point변수에 100할당
// 이름은 아까전에 바인딩 해두었고 이제 값을 할당!

// 7. const get = function(){...}
// function 오브젝트 생성, get에 할당
// get 함수가 속한 스코프(영역)를 get오브젝트의
// [[Scope]]에 설정

// ----add()함수 호출----

// 8. add(200) 함수를 호출합니다.

// 9. point +=param;
// 먼저 레코드에서 point 이름을 찾는다.
// point가 없으므로 다시 검색하게 됨.
// add오브젝트의 [[Scope]]를 스코프로 사용
// 함수 밖에 있는 변수도 값을 바꿀 수 있다. point=300
// 함수가 속한 스코프를 내부 프로퍼티인 [[Scope]]에 설정해두고,
// 마치 내것인냥 사용하기 때문이다.
// book오브젝트가 스코프이며 point가 있으므로 값을 더한다.

// ----get()함수 호출----

// 10. get()함수를 호출한다.

// 11. return point;
// 마찬가지고 레코드에 point가 없으므로 다시 검색한다.
// get 오브젝트의 [[Scope]]를 스코프로 사용한다.
// book오브젝트가 스코프이며, point가 있으므로 값을 반환한다.

// point를 get과 add에서 공유하였다. 같은 스코프이기 때문이다.

// -> 내가 보기에는 최초에 글로벌 오브젝트에
// book function오브젝트가 설정되고 Scope가 그 안에 있는데,
// 호출이 되어서 함수 안으로 들어가는 시점에
// 실행 콘텍스트가 생성되고 그 안에 외부 렉시컬 환경 참조에
// [[Scope]]가 생성되고 거기서 이 만들어진 Scope를 참조하는 것이다.

// 동적 바인딩
// 코드를 실행할 때마다 바인딩..
// with, eval()가 있다.
