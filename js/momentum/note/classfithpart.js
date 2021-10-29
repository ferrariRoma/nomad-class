/* 7-0강
이제 todo list를 본격적으로 만들어 봅시다.
일단 할 일을 입력받을 폼을 만들어주고
ul을 만들어주자. ul안의 li는 js로 추가해주도록 하자! */
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

/* 자 이제는 greeting을 만드는 것과 절차가 같다.
form의 submit를 preventDefault로 막은 뒤에
그 정보들을 li 태그를 추가하고 그 안에 넣어주는 것  */

function handleTodoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value); // check
  const inputContent = todoInput.value;
  todoInput.value = "";
  const inputList = document.createElement("li"); // 내가 따로 해보았던 부분
  inputList.value = `${inputContent}`; // 내가 따로 해보았던 부분
  todoList.appendChild(inputList); // 내가 따로 해보았던 부분
}

todoForm.addEventListener("submit", handleTodoSubmit);

/* 7-1강
// console.log("까먹지", "말자");
자, 이제는 할 일을 출력해주도록 하자.
paintTodo()함수를 따로 만들어서
handleTodoSubmit에 추가할 수 있도록 하자

paintTodo함수에는 인자를 주도록 하자

니꼬는 li만 단순히 만드는 것 보다는
      <li>
        <span></span>
        <button></button>
      </li>
이런 식으로 만들어서 button을 누르면
삭제가 될 수 있도록 만들자고 함.

일단 li와 span태그를 생성해주자.
근데 span은 li 안에 있잖아?

li.appendChild(span);

이렇게 해주면 둘은 모자 관계가 된다.

이제 지워보자. 그리고 새로고침을 해도
사라지지 않게 만들어보자. 이 두 가지를 고쳐봅시다!
*/
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function paintTodo(inputContent) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = inputContent;
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const inputContent = todoInput.value;
  todoInput.value = "";
  paintTodo(inputContent);
}

todoForm.addEventListener("submit", handleTodoSubmit);

/* 7-2강
delete button추가하기!
역시 js를 통해서 만들어 줄건데요,
이건 click 이벤트를 감지하도록 만들어야 합니다.

버튼을 만들어서 li에 추가시켰으니까,
이제 버튼을 누르면 삭제가 될 수 있도록 만들어봅시다.
다른 함수를 하나 더 만들어서 말이죠!

함수를 만들고 간단히 확인 차원에서
console.log만들고서 클릭을 해보니 작동은 하는데,
문제는 항목이 여러 개일때는 무엇을 클릭했는지
어떻게 알 수 있을까요?

단서를 얻기 위해서 todoDelete(여기에) event를
추가하고 console.log로 출력해봅시다.

여기서 주목을 해야하는 항목은
path와 target이다.
path를 보면 li를 포함해서
거쳐서 온 모든 경로를 볼 수 있다.
target은 내가 뭘 눌렀는지를 보여주는 것이다.
button을 볼 수 있는데, 그럼 다 같은 button일까?

이 방향으로 조금 더 들어가보자.
console.log(event.target)
을 보면 어떤 버튼이 클릭이 되었는지
알 수 있지만 같은 버튼이라서 다 거기서 거기다.

console.dir(event.target)
여기에는 parentNode라는게 있는데
의미하는 건 버튼의 부모를 찾아준다.

여기서 팁은 마우스 커서를 그 property에
올려두면 크롬 화면에서는 뭘 가리키는지
표시가 된다.
  console.dir(event.target);
  console.log(event.target);
  console.log(event);
첫번째꺼는 
첫째항목이 다 가리켜지는 parentNode 항목이 있지만
나머지는 없다.
아예 버튼 아이콘만 가리켜지거나 가리켜지는 property가
없다는 것.

더 들어가서
  console.dir(event.target.parentElement);
  console.dir(event.target.parentElement.innerText);
을 각각 해보면,
각 항목마다 다른 값들을 얻을 수 있다.
그렇구나! 같은 버튼마다의 차이를 확인하려면 이 부분을
확인하면 되겠구나!

 */
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function todoDelete(event) {
  const deleteContent = event.target.parentElement;
  deleteContent.remove();
}

function paintTodo(inputContent) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = inputContent;
  const button = document.createElement("button");
  button.innerText = "⚑";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const inputContent = todoInput.value;
  todoInput.value = "";
  paintTodo(inputContent);
}

todoForm.addEventListener("submit", handleTodoSubmit);

/* 7-3강
자, 이번에는 todo를 저장해보자!
어디에? 지난번에 봤던,
local storage에다가 말이다.
1. 일단 저장한다.
2. 새로고침을 하면 불러와서
   다시 화면에 띄워준다.

그럼 먼저 1번 과정을 완성해보자!
todos라는 배열을 만들고,
새로운 todo가 추가될 때마다
handleTodoSubmit에 push해줄 수 있도록 하자.

하지만 local에는 배열이 저장되지 않는다.
오직 텍스트만 저장이 가능하다.

그래도 일단 해보기나 하자.
function을 하나 더 만들건데,
이름은 saveTodos라 짓자.
얘는 local에 내용을 넣는 역할로 사용하자.

실제로 사용을 해보면,
새로고침을 했을때 로딩이 안되는 것을 차치하고,
새로고침하고 다른 것을 입력을 하면 기존의 것이
새로고침 된다.

입력된 것을 보면
a,b,c,d,...이렇게 되어있는데
["a","b","c",..]이렇게 배열로 저장을 하고 싶음

우리는 브라우저가 가지고 있는 기능을 이용해 볼 것이다.
js object나 array나 어떤 것이든,
string으로 바꿔주는 기능이다.

콘솔에 이렇게 쳐보자.

const player = {name:"nico"}

그리고 이걸 string으로 바꾸고 싶다면,

JSON.stringify(player)

이라고 치면 된다.

고로

localStrorage.setItem("todos",JSON.stringify(todos));

라고 고쳐서 어떻게 local에 저장이 되는지 확인을 해보자.

이렇게 하니까
["a","b","c",..]
이런식으로 저장이된다.
물론 새로고침을 하고 새로 입력하면 초기화 되는 건 여전하지만,
그래도 string으로 저장이 되니 써먹을 수 있다.
 */
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function todoDelete(event) {
  const deleteContent = event.target.parentElement;
  deleteContent.remove();
}

function paintTodo(inputContent) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = inputContent;
  const button = document.createElement("button");
  button.innerText = "⚑";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const inputContent = todoInput.value;
  todoInput.value = "";
  todos.push(inputContent);
  paintTodo(inputContent);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

/* 7-4강
이번에는 local에 있는 데이터들을
loading할 수 있도록 해보자.

지난 번에 stingify를 통해서
string으로 데이터를 저장했는데,
(값을 string으로 저장하고 싶을때
  사용한다.)
이 단순한 string을 가지고
살아있는 js object로 바꿀 수 있다.

JSON.parse

로 할 수 있다.

JSON.parse(localStorage.getItem("todos"))

이렇게 하면 "["one","two","three"]" 이런 데이터를
['one', 'two', 'three'] 이렇게, js가 사용할 수 있는
배열로 가지고 와준다.

이걸 이용해서 local에서 todos를 가져올 수 있도록
해보자.
이 과정을 해줄 함수를 만들자!
 */

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
  const deleteContent = event.target.parentElement;
  deleteContent.remove();
}

function paintTodo(inputContent) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = inputContent;
  const button = document.createElement("button");
  button.innerText = "⚑";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const inputContent = todoInput.value;
  todoInput.value = "";
  todos.push(inputContent);
  paintTodo(inputContent);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

/* 여기서는 local이 null이 될 수 있다는 점을
꼭 고려해주어야 한다.
복습을 잠깐 해보자면,
if (savedTodos) 이거는
if (savedTodos !== null)
과 같다.

한편, 배열은 생각보다 똑똑하다.
그래서 각각의 항목에 function을
사용할 수 있다.
그러기 위해서는

.forEach를 사용해야 한다.

paresTodos.forEach((element) => {
    
});

이렇게 사용한다.

forEach(sayHello)를 하면 콘솔에
배열 갯수만큼의 hello가 보이는 것을
확인할 수 있다.

하지만 어떤 배열element에 적용이
되는지는 알 수 없다.
js에서는 지금 처리되고 있는 item에
대해서도 정보를 제공해준다.

eventListener가 첫번째 element에 대한
정보를 주는 것 처럼,
forEach(여기에) 들어가는 함수도,
그 함수가 작동되는 배열 항목에 대한
정보를 준다.

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  paresTodos.forEach(sayHello);
}


이렇게 해주면 각 항목에 function이 적용되는 것을
알 수 있다.

단축키처럼 더 간결하게 표기할 수도 있다.

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  paresTodos.forEach((item) => console.log("this is the turn of ", item));
}

*/

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  paresTodos.forEach((item) => console.log("this is the turn of ", item));
}

/* 7-5
parse를 이용해서 string을
배열로 바꿔주고,
forEach를 통해서 배열의 각 요소에
함수를 적용시켜준다.

이제는 local에서 변환시킨 배열의 각 요소를
화면에 출력해주는 함수를 만들어 보자!
어라? 그치만 그것은 이미 만들어져 있고요~

paintTodo
이걸 사용하면 된다.

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  paresTodos.forEach(paintTodo);
}

보면 조금 다르지?
paresTodos.forEach(paintTodo);

forEach((item) => paintTodo(item));
이렇게 안해도 된다는 것임.

왜 이것 밖에 없음? 어쩌면 당연한 것이다.
forEach 자체가 각각의 배열의 string 요소를
불러오는 건데,
그렇기 때문에 따로
paintTodo(여기에) 뭘 안적어두는 것이다.



한 가지 문제가 또 눈에 보이기 시작했다.
새로고침을 하고서 새로이 무언갈 입력을 하면
이전 요소들이 사라진다. 흠..
새로운 요소들이 기존의 것들을 덮어쓰고 있는 것이다.

니꼬쌤이 알려주시길,
아래의 todos 배열이 항상 비어있기 때문이다.
그래서 새로고침을 하면
local에 있는 걸 불러오는데,
그 뒤에 새로이 추가하면
텅 빈 배열에 채워지고,
새로운 todo 들만 포함하고 있는
array를 저장하기 때문이다.

생각해보니 어렵진 않다.
local에 값이 있으면 그걸 todos에 넣고
시작하게 하면 되지 않을까?

그러기 위해서는 todos를 업데이트 할 수 있도록
let으로 바꿔주자!

if(savedTodos) 조건문에
todos = paresTodos;
이것을 추가하면 새로고침을 해도
local에서 불러와서 화면에 띄워줌과 동시에
이후에 JSON.parse로 다시 배열로 만든
string을 todos에 저장시켜준다.

이럼 해결 완료!!

다음으로 해결해야할 문제는 삭제이다.
이렇게 만든 다음에, 삭제 버튼을 누르면,
local에서 그대로 있음을 알 수 있다.

화면에서는 지웠지만, local에서 삭제는 하지
않았기 때문이다.

아마 remove를 사용하시겠지?
*/

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
  const deleteContent = event.target.parentElement;
  deleteContent.remove();
}

function paintTodo(inputContent) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = inputContent;
  const button = document.createElement("button");
  button.innerText = "⚑";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const inputContent = todoInput.value;
  todoInput.value = "";
  todos.push(inputContent);
  paintTodo(inputContent);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  todos = paresTodos;
  paresTodos.forEach(paintTodo);
}
