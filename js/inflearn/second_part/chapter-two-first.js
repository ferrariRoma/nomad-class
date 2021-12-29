// 중고급 강좌 소개, 범위

// 강의: ES3/ES5 스펙의 아키텍처, 메커니즘 관련 키워드

// 강좌 방향

// ES5기준 엔진 처리 중심
// 실행 콘텍스트란?
// 함수가 실행될 수 있는 환경,
// 그리고 함수가 실행되었을 때 결과를 저장하는 영역이다.
// 함수의 모든 처리는 이 안에서 이루어 진다고 할 수 있다.

// lexical 정적, dynamic 동적
// js는 정적 환경을 취하는데,
// 그래서 실행 콘텍스트가 실행을 담당한다면
// 그 안에서 환경적인 측면을 처리를 담당한다.
// 실행콘텍스트가 실행하는 묶음이라면,
// 그 안에서 환경적인 부분을 처리

// 식별자 해결(identifier Resolution)은
// 바탕이 된다. 함수를 호출했을 때
// 어떻게 어디서 찾을건지 등을 컨트롤을
// 해준다.

// Binding은 변수,this와 관계가 있다.
// 변수를 어떻게 실행 콘텍스트의 환경(environments)에
// 바인딩을 해서 레코딩을 할 것이냐?
// this는 어떻게 바인딩 할 것인지?
// this는 함수 바깥에 있는 오브젝트이고,
// 변수는 안/밖에 모두 작성할 수 있는데,
// 그것을 실행 콘텍스트 안에 어떻게 묶을 건지를 결정해준다.

// 강의: 엔진 관점의 핵심 키워드

// 엔진은 해석과 실행으로 나누어 볼 수 있음.
// 해석은 컴파일을 하고 실행할 환경을 설정하는 것이다.(context)
// 실행이란 해석 단계에서 설정된 환경을 바탕으로 코드를 실행하는 것이다.(execution)

// 실행환경을 만드는 것은 함수가 호출되기 전후로 다 할 수 있지만,
// 그러나 실행은 함수가 호출된 다음에 하는 것이다.(identifier Resolution)

// 그래서 키워드는 context이다.
// 함수라는 것을 어떤 묶음, 덩어리로 가져갈 것인가가 관건이다.
// 여러 박스에 함수의 내용을 분산시키는 것 보다는
// 하나의 박스 안에 함수에서 넣는 것이 더욱 심플하다.
// 그럼 하나의 context만 메모리에 할당해주면 된다.

// 함수가 호출되었을 때 어떻게 실행하는 묶음(컨텍스트)를
// 가져 갈 것이냐? (execution context)

// 그럼 왜 실행 콘텍스트를 묶음으로 가져감?
// 그 답은 바로 identifier Resolution이다.

// 함수가 호출 되었을 때 함수의 이름을 찾아야지,
// 그때 실행 콘텍스트(묶음) 안에 있으면 찾기 편하겠지?
// 그런데 그게 콘텍스트 밖에 있으면 찾으러 가야함.
// 엔진 처리도 복잡해지고 시간도 오래 걸리게 됨.

// 그리고 변수에 값을 할당했을 때 그 변수가 밖에 있으면,
// 그 변수에 관련된 오브젝트를 찾아서 가지고 와야하니,
// 효율이 떨어진다.

// identifier Resolution, 여기서 파생된 것이
// 바로 스코프이다.
// 식별자가 어디에 있는지에 대한 정보를
// 구조적으로 가져가는 것이다. 그래서 chain인 것이다.
// 하지만 이렇게 구조적인 스코프 체인을 가지고 올라가는 것 역시
// 엔진에겐 부담이 된다.
// 콘텍스트 외의 부분인 스코프 체인에서 무언갈 찾아서
// 실행을 시키는 것은
// 콘텍스트 개념에서 벗어나는 것이기 때문이다.
// 단일 스코프로 가져가서 실행 콘텍스트 안에 몽땅 다 처리를 하면
// 엔진도 심플하게 처리할 수 있고 빠르게 처리할 수 있다.

// 그럼 왜 이렇게 하나로 해서 가져가려고 하냐?
// identifier Resolution이것을 위해서이다.
// 변수 이름을 어떻게 빨리 찾고 실행할거냐?

// 이때까지 설명한 것이 엔진의 방향이다.

// 결국 식별자 해결을 하기 위해서
// context가 필요했던 것이고,
// 함수 호출 시 식별자 해결을 하게 되니까
// 실행 context라는 묶음으로 묶어버린 것이다.
// 이걸 어떤 단위로 가져갈 것이냐?
// ES3에서는 Scope Chain이고
// 5에서는 Lexical Environments이다.
// (그래서 스코프 체인이 무겁다고 한 것이구나..
// 렉시컬은 훨씬 심플하니까!)
// 하나의 묶음으로 가져 가는 것이 좋다.

// 강의: Execution Context 형태

/* function book() {
  const point = 123;
  function show() {
    const title = "JS책";
    // getPoint();
    // this.bookAmount
  }
  function getPoint() {
    return point;
  }
  show();
}
book(); */

// function show를 만나면 function오브젝트를 생성
// show의 [[Scope]]에 스코프 설정
// 이때 [[]]는 엔진이 설정하는 프로퍼티를 뜻한다.
// 여기서 Scope는 point부터 show()까지 말한다.
// show 안에 point를 호출하기 때문이다.

// 마지막에 show()를 호출하기 전에
// show 실행 콘텍스트를 아래와 같이 만든다.
// 이것은 함수 실행을 위한 Context환경을 구축하는 것이다.
// 즉, 하나의 덩어리 안에서 함수가 실행될 수 있도록 만든다.

/* show 실행 콘텍스트(EC):{
  렉시컬 환경 컴포넌트(LEC):{
    환경 레코드(ER):{
      선언적 환경 레코드(DER):{
        title: "JS책"
      },
      오브젝트 환경 레코드(OER):{}
    },
    외부 렉시컬 환경 참조(OLER):{
      point:123,
      getPoint:function(){}
    }
  },
  변수 환경 컴포넌트(VEC):{},
  this 바인딩 컴포넌트(TBC):{
    글로벌 오브젝트(window)
  }
} */

/* show 실행 콘텍스트(EC):{
  렉시컬 환경 컴포넌트(LEC):{
    // 정적임. 다이나믹이 아님. 그리고 아래에 보면
    // 같은 레벨의 변수 환경 컴포넌트가 있다. 
    환경 레코드(ER):{
      선언적 환경 레코드(DER):{
        title: "JS책"
        // const title = "JS책"을 만나면
        // 선언적 환경 레코드에 위와 같이
        // 프로퍼티 형태로 설정해준다.
      },
      오브젝트 환경 레코드(OER):{}
    },
    외부 렉시컬 환경 참조(OLER):{
      // 함수에서 값을 구하는 형태를 살펴보자.
      // 일단 파라미터를 이용해서 구한다.
      // 그 다음은 변수를 선언해서 값을 구할 수 있고,
      // 함수를 호출하여 함수에서 반환된 값을
      // 사용할 수도 있다.
      // 함수 밖의 변수를 값으로 사용할 수 있다.
      // 이것은 show function오브젝트를 만들때
      // 설정된 스코프 범위가 아래처럼 외부 렉시컬 환경 참조에
      // 설정된다. 보는 것처럼,
      // 이게 하나의 콘텍스트로 만들어지기 때문에
      // 내것처럼 사용할 수 있다.
      // 또 하나의 방법은 this로 참조해서
      // 프로퍼티 값을 구할 수 있다.
      // 여기서 this는 show()앞에 적힌 오브젝트를 참조하는데
      // show() 앞에는 오브젝트가 작성되지 않았지만
      // 이렇게 this로 참조할 수 있는 것을
      // this바인딩 컴포넌트에 바인딩 시켜놓는 것이다.
      // show()앞에 오브젝트를 작성하지 않았기 때문에,
      // 그것은 글로벌 오브젝트가 되지만
      // 그건 실체가 없으니까 window오브젝트를 참조하는 것이다.
      point:123,
      getPoint:function(){}
    }
  },
  변수 환경 컴포넌트(VEC):{},
  // 이거임. 이거랑 렉시컬의 초깃값은 같음.
  // 같게 하는 이유가 있긴 하다.
  // 그 이유는 뒤에서 알려준다.
  this 바인딩 컴포넌트(TBC):{
    // 그리고 이걸 만들어주는데 this로
    // 참조할 오브젝트를 바인딩 해준다.
    글로벌 오브젝트(window)
  }
} */

// 위와 같이 하나의 콘텍스트를 만들었기 때문에
// 다른 값을 구하기 위해 메모리를 나와서 다시 다른 것을
// 메모리로 올리고 할 필요가 없음.
// 이게 자바스크립트의 정적 콘텍스트의 개념이다.
// 이런 환경을 동적이 아닌 정적으로 만들어버린다는 것이다.

// 렉시컬
// function키워드를 만나서 show function오브젝트를 만들때
// 이때 Scope가 결정이 된다. 이게 정적이라고 하는 것이다.
// show()함수를 호출했을 때 show함수에 대한 Scope를
// 그때 만드는 것은 동적(다이나믹)인 것이다.

// 스코프의 구조를 보면 환경 컴포넌트가 있고,
// 그 안에 스코프에 관련된 것이 있고,
// 그 안에 각각의 식별자가 존재하게 된다.

// js도 동적인 부분이 있긴 하지만 기본적으로는 정적이다.
// 정적으로 스코프를 만들고 정적으로 환경을 만든다.
// 그리고 환경이라는 개념을 가져간다는 것.
// 환경의 구성 요소는 스코프 개념이 들어가 있고,
// 식별자 해결을 위한 처리가 들어가 있다는 것.

// 강의: 식별자 해결, 스코프 용도

// 식별자 해결
// 사용할 변수/함수를 결정하는 것
// 예: point변수
// 신속하고 정확한 검색을 위해 스코프 필요
/* const point = 100;
function getPoint() {
  const point = 200;
  // getPoint스코프에서 찾고 없으면
  // 그 밖 스코프에서 찾는다.
  return point;
}
const result = getPoint();
console.log(result); */

// 스코프에서 이름을 찾기 위해서
// 스코프에 이름을 설정한다.
// 스코프에 설정된 변수 또는 함수는 값은 변경되지만,
// 이름은 변경되지 않음.
// 식별자 해결 대상은 이름이다.

// resolution의 사전적 의미: 해결, 결정
// 결정도 시맨틱적으로 맞음.

// 스코프 용도
// 식별자 해결을 위한 수단과 방법
// 스코프가 목적이 아님.
// 위에서 point값을 리턴하기 위해서 스코프를 사용한 것이다.
// 만약에 식별자가 유일하다면 스코프가 필요하지 않음.
// 하지만 유일하게 작성하는 것은 불가능하다.
// 그래서 스코프가 필요하다.

// 식별자 해결을 위해 스코프가 있는 것이지
// 스코프 때문에 식별자 해결이 있는 것이 아니다.

// 강의: scope chain, 스펙의 scope chain사용

// ES3: scope chain
// 스코프 체인은 실행 콘텍스트와 관련이 있으며,
// 식별자 해결을 위해 사용
// 이것은 ES5도 같다.
// 다만 5에서는 스코프는 사용하지만
// 체인은 사용하지 않는다.

// 여기서 scope chain은 식별자를 검색하기 위한
// 오브젝트 {name:value}리스트이다.
// 즉, 다수이다.

// 함수가 호출되면 스코프를 생성하고
// 함수의 변수와 함수를 {name:value}형태로 설정

// 생성한 스코프를 스코프 체인에 연결하고
// 스코프 체인에서 식별자를 해결
// 즉, 스코프를 만들면 그것을 스코프 체인에 연결시킨다는 것이다.
// 그것을 리스트, 즉 구조적,계층적으로 만들고
// 거기에서 식별자를 검색하고 해결한다.

// 여기서 중요한 포인트는
// 이것을 동적 처리를 한다는 것이다.
// 함수가 호출되면 그 안에 변수와 함수의 이름을
// 오브젝트 안에 {name:value} 프로퍼티로 만들고
// 그것을 스코프 체인에다가 연결을 시킨다는 것이다.
// 그래서 함수가 새로 생길 때 마다 스코프 체인이 동적으로 처리 된다.

// 반면 5는 함수가 호출되었을 때
// 정적 환경에다가 함수 안의 변수와 함수를 설정하고
// 이외의 처리는 하지 않는다.

// 3은 두 번 동작이 발생하고
// 정적이 아닌 함수가 생서오딜 때마다 동적으로 생성이 된다는 것이다.

// 3의 실행 콘텍스트 환경을 보면
// 스코프 체인과 엑티베이션 오브젝트가 있다.
// Activation Object는
// 함수가 실행될 때 실행된 결과를
// 그리고 실행하기 위한 환경을 만든다.

// 5에서는 이것은 없고 이것에 대항하는
// Lexical Environments가 있다.
// 아키텍쳐에서 큰 차이가 있다.

// 키워드는 동적이냐 정적이냐?

// 스펙의 scope chain사용 횟수
// 3:37, 5:1, 6:0
// 5: 바뀐 것을 나타내기 위해 사용
// scope chain형태를 아래와 같이 바꿈.
// lexical environment의
// declarative environment record에
// 함수의 변수와 함수 이름을 바인드
// 3에서는 scope chain에 바인딩 하였는데,
// 함수의 변수와 이름을 선언적 환경 레코드에 바인딩 한다는 것이다.

// 3은 구조체가 하나가 더 있는 것이고
// 5는 없는 것이다.
// 유일하게 콘텍스트를 만들 수 있다.
// 하지만 3에서는 스코프 체인이라는 하나의
// 또 다른 구조체와 엑티베이트 오브젝트를
// 가지고 있다. 이걸 하나의 콘텍스트로 가져가는데,
// 이런 구조적 문제 때문에 콘텍스트라고 하기엔 문제가 있다.

// 이게 왜 중요하냐?
// 함수가 호출되어서 메모리로 올라갈 때 하나만 올라가면 된다.

// 5는 스코프 체인을 사용하지 않으며, DER에서 변수와
// 함수 이름을 검색한다.

// 강의: Lexical Environment, var키워드 문제와 해결, 동적 환경

// Lexical Environment
// function키워드를 만나면
// function 오브젝트를 생성하고
// 스코프를 FO의 [[Scope]]에 설정
// 이것은 함수 밖의 스코프가 설정되는 것이다.
// 함수 안은 아직 들어가보지 않았으니 모름
// 이 시점에서 스코프가 결정된다.
// 이게 Lexical Environment.
/* const point = 123;
function book() {
  function getPoint() {}
}
book(); */

// 함수가 호출되면 FO의 [[Scope]]를
// 실행 콘텍스트의 렉시컬 환경 컴포넌트의
// 외부 렉시컬 환경 참조에 설정
// 함수 내외부의 함수와 변수를 하나의
// 렉시컬로 사용할 수 있음.
// 하나의 콘텍스트이다.

/* show 실행 콘텍스트(EC):{
  렉시컬 환경 컴포넌트(LEC):{
    환경 레코드(ER):{
      선언적 환경 레코드(DER):{=>함수가 호출됐을때 내부의 변수와 함수가 있는곳
      },
      오브젝트 환경 레코드(OER):{}
    },
    외부 렉시컬 환경 참조(OLER):{=>함수 외부의 변수와 함수
      point:123,
  },
  변수 환경 컴포넌트(VEC):{},
  this 바인딩 컴포넌트(TBC):{
    글로벌 오브젝트(window)
  }
} */

// var키워드 문제
// 함수에서 var키워드를 사용하지 않고
// 변수를 선언하면 글로벌 오브젝트에 설정됨
// 함수에서 몇 단계 위의 글로벌 오브젝트에 설정되는 것이다.
// 이렇게 되면 렉시컬 환경이 아니라 스코프 체인 개념이 된다.

// 그래서 5에서는 use strict사용
// 6에서는 해결 방법으로 let과 const변수를 사용
// 변수 자체에 스코프 제약을 둠.

// 동적 환경
// js도 동적 환경이 있음.
// with문, eval()함수

// with문은 with문을 반복할 때마다
// 스코프가 만들어짐.
// 엔진에 부담이 된다.
// use strict에서 에러가 난다.
// 그래서 보완이 된다.

// eval()은 보안에 문제가 있는 것.

// 강의: Node.js코드 형태

// Node.js는 서버환경
// 서버 프로그램 고려 사항으로는
// 동점 10k이다.
// 만명이 동시 접속 했을 때를 고려하자!

// JS는 싱글 스레드이다.
// 하나의 함수가 호출되어서 끝날때까지
// 다른 함수를 호출하지 않는 것이다.
// 따라서 순차적으로 처리한다.
// 이를 동기처리라고 한다.

// Node.js에서 js는 비동기 처리를 한다.
// 이렇게 되는 것은 C++의 semapore, Mutex때문이다.
// 이것은 하나의 프로세스가 실행되는 도중에
// 아이딜 타임이 생기면 웨이트 큐에 있는 프로세스를 실행시킨다.
// 즉, 비동기 처리를 하는 것이다.

// 이런 환경에서 콘텍스트 형태가 효율성이 높다.
// 예를 들면 3에서는 스코프 체인과
// activation Object가 메모리에 올라간다.
// 이것을 실행하는 도중에 다른 함수가 호출되면
// 그 함수도 스코프 체인과 activation Object를
// 가지고 메모리로 올라간다.
// 그러면 두 개가 왔다갔다 하는 모습이 된다.
// 이런 모습을 10K환경에서 한다고 보면
// 부담이 된다.

// 5에서 실행 콘텍스트는 스코프 체인이 없는
// Context형태 딱 하나이다.
// 다른 함수가 호출되더라도 하나의 콘텍스트 하나만 올라가면 되니
// 훨씬 심플하고 빠르다.

// 이것을 개발자 관점에서 생각을 해보자.
// 실행 콘텍스트에 최적화된 형태로 코드를 작성해야 하며,
// 이를 위해 엔진 처리를 이해할 필요가 있음.
