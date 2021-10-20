/* 기본적인 출력 및 소통은 console.log를
통해서 한다. */
// console.log("니코는 선생님이다.");
// console.log('니코는 선생님이다.');

/* js도 변수 선언을 할 수 있음
const는 상수이다. 근데 변수를 선언할때
이렇게 한다네? 흠..
C와 같이 "2"는 숫자가 아니다. */
// const a=5, b=2;
// console.log(a+b);
// console.log(a-b);

// const name = "NICO";
// console.log("hello " + name);

/* 자바스크립트에서 변수를 선언할때 const를 사용하는 방법은
반만 맞는 말이다. let을 쓸 수도 있기 때문이다. */
// let c=5, d=2;
// console.log(c + d);
// console.log(c * d);

// let yourname = "NICO";
// console.log("hello " + yourname);
/* 이렇게 해도 차이가 없이 출력이 되고 있다.
그럼 차이는 뭘까? 상수와 변수의 차이다! const는 상수잖니~
그래서 이 뒤에서는 바꿀 수 없음. 그래서 절대 바꾸지 않을
값에는 const를 써줘도 되지만 아닌 경우에는
let을 그냥 써주면 된다. */

/* name="nicolas";
이렇게 하면 에러가 난다.
고로 상수이기 때문에 절대 업데이트가 안된다.
가끔 몇몇 변수들은 절대로 변하지 않도록 해야
할 때가 있다. */
// yourname='wg';
// console.log(yourname);

/* 예전에는 var로 통일했는데 이것은
상수와 변수를 구분하는게 아니라 값 그 자체를
의미했기 때문에 어디서든 바꿀 수 있다.
예전 페이지에서는 var을 자주 볼 수 있을것이다.
디폴트는 const. 변수를 써야 할 곳에만 let을
사용해주면 되고 var는 쓰지마라! */
// var i = 2;
// console.log(i);
// i=3
// console.log(i);

/* 2-4강 booleans */
// const amIFat=true;
// console.log(amIFat);

/*
 유저가 로그인을 했는지를 확인하거나
비디오를 보고 있는지
웹사이트를 로그인 하고 있는지를 판단할 수 있다.

true false
null = nothing here
defined, undefined
defined은 변수는 정의했지만 값을 할당해주지
않았다는 것이다. 메모리에는 존재함.
 */
// let something;
// console.log(something, amIFat);
/* null은 자연적으로 발생하지는 않고,
사용자가 여기에 아무것도 없다는 것을 나타내기 위해
할당해주는 것이다. */

/* 2-5강 array */
// const mon="mon";
// const tue="tue";
// const wed="wed";
// const thu="thu";
// const fri="fri";
// const sat="sat";
// const sun="sun";
/* 이렇게 일일이 적어주기는 
비효율적이다. 아래에 각 변수를 연결해주는 걸 보면... 
그냥 단지 문자열이라는 것을 알 수 있다. */
// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
// console.log(daysOfWeek);

/* 아래와 같이 각각의 변수를 연결해서 배열로 만들어주면
더 깔끔하고 하나씩 빼 쓸 수 있어서 유용하다.
C와는 배열의 선언이 조금 다르다는 것을 느끼는구만.. */
// const daysOfWeek = [mon , tue , wed , thu , fri , sat];
// console.log(daysOfWeek);

// const nonsense = [1,2,3,4,"hello", false, null, undefined, 'wg'];
// console.log(nonsense);

// console.log(daysOfWeek, nonsense);
/* 하나를 불러오려면 */
// console.log(daysOfWeek[5]);

/* 추가하려면 */
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

/* 2-6강 */
/* 가끔은 list가 아니라 object라는 것을 만들어야 할 때도 있다. 
{}를 사용한다.
멤버마다 쉼표를 붙여주고 세미콜론은 중괄호 끝에 붙여줌~ */
// const player ={
//     name:"nico",
//     points: 10,
//     fat: true,
// };

/* const game = {
  title: "FPS",
  price: 24000,
  production: "valve",
};
console.log(game);
console.log(game.production);
game.production = "kakaoGames";
console.log(game.production);
game.release = 2020;
console.log(game); */

// console.log(player);
// console.log(player.points);
/* 이런 의미에서 보면 console도 object이고
어딘가에 있는 것이 log라는 것이다.
object는 데이터를 organize하기는 좋지만 
리스트가 아니기 때문에 모든 값이
같은 의미를 가지는 것은 아니다. 
name과 points 등이 같은 의미를 가지는 것은 아니다.

멤버에 접근하는 다른 방법으로는, */
// console.log(player["name"]);

/* 물론 데이터를 업데이트도 할 수 있다. */
// console.log(player);
// player.fat=false;
// console.log(player);

/* 선생님? 근데 player가 const인데
어떻게 값을 바꿀 수 있나요?
우리는 player라는 object 자체를 바꾸려는게 아니라
object 안의 무언가를 수정하는 것이다.
당연히 player 자체를 건들면 에러가 난다. */
// player=false;

/* 그럼, 멤버를 추가할 수 있나요?
of course, yes!
아래처럼 새로운 멤버명과 할당할 내용을 적으면
추가가 되는 것을 확인할 수 있다. */
// player.lastname="potato"
// console.log(player);
// player.points=player.points+15;
// player.points="player.points+15";
// console.log(pla

/* 2-7강 function */
/* console.log 중 console이 뭔지는 알게 됐는데,
log는 뭐임? 위에서 player.points=xxx와 같이
멤버에 값을 할당하는 부분에서 ()는 안썼지?
그럼 console.log(xx)에서 ()는 어떤 의미일까?

왜냐하면 function이 아니기 떄문에 ()를 안썼다.
function은 반복해서 사용하는 조각
그럼 어떻게 만듦? */

/* 값은 어떻게 넣나요? 이것저것 해보니까
변수를 선언하고 함수 선언부의 파라미터 부분에 넣어준 다음
함수 실행부에 그 변수를 이용하면 됨!
내가 찾은 방식이라 니꼬는 어떻게 말할지 모름~ */
// let a=null;
// function lesson(a){
//     /* 여기 작성하는게 실행이 되는 것이다. */
//     console.log('say hello ' + a);
// }
// lesson('some');
// lesson();

/* 2-8강 function-second part */
/* 그럼 어떻게 함수에 데이터를 전송할 수 있음? */

/* 바로 변수 정의 없이 파라미터에 적어줘도 된다. 
이런 파라미터들은 함수 정의부 내에서만 존재하기 때문에
당연히 함수 밖에서 바로 변수처럼 사용할 수는 
없다. */
// function wg(nameOfPerson, age){
//     console.log(nameOfPerson, age);
//     console.log("Hello my name is " + nameOfPerson + " and I am " + age + " years old");
// }
// wg('nico', 10);
// wg(8+8, 23);
// wg(null, "Nglun");
// wg(undefined, 2-1);

/* 간단하게 계산기를 만들어봅시다! */
// function plus(a,b){
//     console.log(a+b);
// }
// plus();  // not a Number
// plus(3,9);

/* 그럼 object애는 함수를 못 넣음? 
가능하다!! */
// const player = {
//     name:"nimo",
//     saynimo: function(greet){
//         console.log(greet);
//     },
// };

// console.log(player.name);
/* 일반적으로 object안에 멤버를 출력할 땐
위와 같이 하지만
object안에 있는 함수는
player.saynimo라고 호출해줄 수 있다.
object밖에서 함수를 부르는 것과는 조~금 다르니
눈여겨 봐두자! */
// player.saynimo("hello world");

/* function plus(a, b) {
  console.log(a + b);
}
plus(5, 2);

function prt(a, b) {
  console.log(a + b);
}
prt("what are ", "you doing?");

const company = {
  foudation: 2010,
  value: function (market, current) {
    console.log(market + current);
  },
};
company.value(20, 10); */

// const calculator = {
//   addtion: function (a, b) {
//     console.log(a + b);
//   },
//   subtraction: function (a, b) {
//     console.log(a - b);
//   },
//   multiplication: function (a, b) {
//     console.log(a * b);
//   },
//   division: function (a, b) {
//     console.log(a / b);
//   },
//   square: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.addtion(2, 5);
// calculator.subtraction(6, 5);
// calculator.multiplication(2, 5);
// calculator.division(8, 2);
// calculator.square(2, 5);

/* 2-11강 
이번 강에서는 지난 강 말미에 줬던 숙제로 시작을 했다.
근데 여기서 console을 사용하지 말아보자! */

// const calculator = {
//   addtion: function (a, b) {
//     alert(a + b);
//   },
//   subtraction: function (a, b) {
//     alert(a - b);
//   },
//   multiplication: function (a, b) {
//     alert(a * b);
//   },
//   division: function (a, b) {
//     alert(a / b);
//   },
//   square: function (a, b) {
//     alert(a ** b);
//   },
// };

// calculator.addtion(2, 5);
// calculator.subtraction(6, 5);
// calculator.multiplication(2, 5);
// calculator.division(8, 2);
// calculator.square(2, 5);

/* 위에 함수를 alert로 바꾸고 아래처럼 console.log로
출력을 해보면 알람을 잘 출력이 되는데 console.log에는
undefined가 출력되는 것을 볼 수 있다.  */

// console.log(calculator.addtion(2, 5));

/* 어떻게 하면 콘솔화면에 출력을 위한 것이 아닌
그저 결과를 알려줄 수 있을까? 그 값을 메모리에
저장해서 나에게 보여줄 수 있을까?
아래처럼 해보아도 console.log는 undefined가
뜰 것이다. */
// const age = 95;
// function calculateKrAge(ageOfForeigner) {
//   ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

/* return을 적어주면 된다. 내가 C언어에서 값을 얻는
그런 것을 하려면 return!!
function이 밖과 소통하는 방법이다. */
// const age = 95;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

/* 우리가 지난 시간에 만들었던 계산기들이
우리가 생각한 그대로 작동되게 하기 위해서는
return을 설정해주도록 하자! */

// const calculator = {
//   addtion: function (a, b) {
//     return a + b;
//   },
//   subtraction: function (a, b) {
//     return a - b;
//   },
//   multiplication: function (a, b) {
//     return a * b;
//   },
//   division: function (a, b) {
//     return a / b;
//   },
//   square: function (a, b) {
//     return a ** b;
//   },
// };

/* return값이 있기 때문에 다양한 용도로 활용을
할 수 있다.
console.log만 사용할 때는 그저 값을 보여주기 위한
용도였기 때문에 값을 가져올 수는 없었음.
result를 사용하면서 값을 이용할 수 있고
접근할 수 있게 되었다. */
// const plusResult = calculator.addtion(2, 3);
// const squareResult = calculator.square(plusResult, 5);
// const subtractionResult = calculator.multiplication(10, squareResult);

/* 2-12강 recap
return을 하면 function은 작동을 멈추고 결과 값을 return
하고 끝나버린다. 이런 건 C에서도 함수를 만들때 사용해봤지? */

/* 2-13강 조건문~ 두두둥장
자, 음주가 가능한 나이인지를 묻는 계산기를 만들어 봅시다.
여기서는 prompt를 사용해볼건데 사용자에게 창을 띄울 수 있게
해준다. */
// const canDrink = prompt("How old are you?");
// console.log(typeof canDrink);

/* 
prompt는 css를 적용시킬 수 없고 몇몇 브라우저는 이런
팝업 방법을 제한하기 때문이다. 요즘은 대부분이 html과
css로 만든 자신만의 창을 이용함. 
그런데 prompt창을 이용하니까 숫자를 입력해도 sting이라고
하네?
그럼 이번엔 한 타입을 받아서 다른 타입으로 바꾸는 걸 해봅시다.
해보면 숫자가 아닌 데이터 타입에 있어서는 NaN이 출력됨.
*/

// parseInt("canDrink");
// console.log(
//   typeof "15",
//   typeof parseInt("15"),
//   typeof canDrink,
//   typeof parseInt(canDrink)
// );

/* 위에 우리가 원래 만들기로 했던 술을 마실 수 있는
나이인지를 계산하는 조건문을 만들어 봅시다. */

/* 2-14강 조건문2탄!
이번에는 지난 시간에 했던 prompt와 parseInt를
이용해서 숫자가 아닌 다른 타입의 데이터를 입력했을 시에
다시 입력하게 하는 함수를 만들어보겠다. */
// const canDrink = parseInt(prompt("How old are you?"));
// console.log(isNaN(canDrink));

/*
조건문은 아래와 같이 작성하면 된다.
if(condition) {
    condition === true
} else {
    condition === false
}
이렇게 하면 된다. 여기서 condition은 boolean으로~
true나 false에 대한 기재가 따로 없으면 위가 true이다.
*/
// if (isNaN(canDrink)) {
//   console.log("plz write a number");
// } else {
//   console.log("Thanks");
// }

/* 2-15강 보기 
else if도 있고 else if는 C처럼 여러개 쓸 수 있음.
연산자로는 역시 C와 마찬가지로 ||도 있고 &&도 있다.*/
// const canDrink = parseInt(prompt("How old are you?"));
// if (isNaN(canDrink) || age < 0) {
//   console.log("plz write real positive number");
// } else if (canDrink < 18) {
//   console.log("Too young");
// } else if (canDrink >= 18 && canDrink <= 50) {
//   console.log("You can drink");
// } else {
//   console.log("Too old");
// }

/* 2-16강 복습!
연산자는 ===와 !==도 있다.
C와는 다르게 =이 하나씩 더 붙어 있다! */
// const canDrink = parseInt(prompt("How old are you?"));
// if (isNaN(canDrink) || canDrink < 0) {
//   console.log("plz write real positive number");
// } else if (canDrink < 18) {
//   console.log("Too young");
// } else if (canDrink >= 18 && canDrink <= 50) {
//   console.log("You can drink");
// } else if (canDrink === 100) {
//   console.log("Enjoy it as much as you want");
// } else {
//   console.log("Too old");
// }
