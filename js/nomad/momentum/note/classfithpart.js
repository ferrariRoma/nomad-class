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

/* 7-6강
자, 이번에는 이어서
할 일이 저장 되어있는 local이
삭제버튼을 누를때마다
삭제된 항목들도
업데이트가 되도록 하자.

함수 todoDelete을 통해서
화면에서 어떤 element를 지워야 하는지
js는 알고 있다.

하지만 js는 어떤 것을
데이터베이스에서 지워야 하는지 모른다.
만약 a가 2개라면? 그럼 어떤 a를 지워야 할까?

todos들에게 id 같은 걸 주면 어떨까?
text, string 대신에 object로 만들어보자!

명언 배열처럼, 배열 안에 object형식으로,
정보를 저장하는 것!

그럼 id는 어떻게 만들어 줄 수 있을까?
element가 만들어 질때 부여할 수 있는 것으로
Date.now()가 있다.
이는 ms를 주기 때문에 난수처럼 이용할 수 있다!

이제 todo를 추가하는 곳으로 가보자!
handleTodoSubmit에서
todos.push를 통해서 추가를 해줬는데,
이제는 object를 push해보자.

이렇게 하니까
[{"text":"내용","id":Date.now()값}]

이런 모양으로 local에 저장이 된다.
딱 우리가 명언에서 사용하던 모양!

항상 우리가 뭘 하려고 했는지,
뭘 배우려고 했고, 찾으려고 했고, 만들려고 했는지를
떠올려야 한다.
button을 눌렀을때 우리는 화면에서 뿐만 아니라
local에서도 삭제를 하고 싶어했다.
이제 이 id를 이용해서 그것을 구현해보자.

이걸 사용하려면 id를 HTML에 둬야 한다.
우리가 만들었던 paintTodo를 보면
HTML에 전달되는 것은
오직 text인 inputContent였다.

우리는 지금부터 여기에
방금 만든 object인 newTodoObject를 줄것이다.

하지만 이렇게 바꾸면, object object
라고 출력이 된다.
이렇게 보이는 것 말고
진짜 local에 있는 데이터를
화면으로 출력하고 싶다.

그럼 거슬러 올라가서
paintTodo를 조금 수정해주자.
역시 우리가 이미 했던 명언부분에서
object.명언
object.저자
처럼 적어주면 된다.
span.innerText = inputContent.text;

이제 다시 잘 보이는군!!!
하지만 우리는 id를 이용해서
각각의 li item을 구별하고 싶었는데..

어떻게 하면 좋을까?
니꼬는 li에 id를 추가하는데,
그걸 어떻게 하나?

li.id = inputContent.id

li.id 이렇게 id를 할당해줬다.

이렇게 하고 inspect해보면
id가 할당 됐음을 확인할 수 있다.

자 이제 이걸 이용해서 삭제를 할 수 있다는 것이다.
  
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
  li.id = inputContent.id;
  const span = document.createElement("span");
  span.innerText = inputContent.text;
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
  const newTodoObject = {
    text: inputContent,
    id: Date.now(),
  };
  todos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  todos = paresTodos;
  paresTodos.forEach(paintTodo);
}

/* 7-7강
parsedTodos.forEach에서
무슨 일이 일어나는지 명확히 이해를 해야 한다.
왜냐하면 이제 배울 filter라는 친구가
이와 매우 유사하기 때문이다.

우리가 item을 버튼을 눌러서 삭제를
하는 것을 local에서는 실제로는 지우는게 아니라
지우고 싶은 item을 빼고
새 array를 만드는 것이다.
item을 제외하는 것이다.
.filter를 사용하면서 구현이 가능하다.

그럼 filter는 어떻게 작동할까?

function sexyFilter() {

}

[1,2,3,4].filter(sexyFilter)

이렇게 있으면 filter는 sexy함수에
배열의 각 요소인 1,2,3,4을 넣어서
불러줄 것이다.

sexy함수는 여기서 새 array에서
object를 유지하고 싶으면
반드시 true를 리턴해주어야 한다.
false가 나오면 제외시킨다.


이해가 됐으면 함수를 만들어 주자!
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
  li.id = inputContent.id;
  const span = document.createElement("span");
  span.innerText = inputContent.text;
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
  const newTodoObject = {
    text: inputContent,
    id: Date.now(),
  };
  todos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  todos = paresTodos;
  paresTodos.forEach(paintTodo);
}

/* 7-8강
다시 말하지만, filter는 배열을 변경하지 않는다.
filter는 조건을 만족시킨 항목들로
새로운 배열을 만드는 것이다.

function todoDelete(event) {
  const deleteContent = event.target.parentElement;
  deleteContent.remove();
  todos = todos.filter((toDo) => toDo.id !== deleteContent.id);
}

todos = todos.filter((toDo) => toDo.id !== deleteContent.id);
arrow function을 사용해서 이렇게 한 줄로 적었다!

확인차 콘솔로그에 todos를 입력해서
정말로 local에서 삭제가 되는지를 확인해보자!

작동이 잘 안되는 것을 확인 할 수 있는데
이것은 type의 문제이다.
실제로 local에 있는 id의 type을
console.log(typeof li.id)를 통해
확인을 해보면 string으로 확인이 된다.
하지만 todo.id는 number type이다.

todos = todos.filter((toDo) => toDo.id !== parseInt(deleteContent.id));

이렇게 고쳐주자!

음.. 그런대도 새로고침을 하면 이전 배열이 그대로
reload가 되는 것을 확인 할 수 있다.
이건 새로 만들어진 array를 저장하지 않아서
그렇다.

마지막에 saveTodos를 한 번 더 적어주자!
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
  todos = todos.filter((toDo) => toDo.id !== parseInt(deleteContent.id));
  saveTodos();
}

function paintTodo(inputContent) {
  const li = document.createElement("li");
  li.id = inputContent.id;
  const span = document.createElement("span");
  span.innerText = inputContent.text;
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
  const newTodoObject = {
    text: inputContent,
    id: Date.now(),
  };
  todos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const paresTodos = JSON.parse(savedTodos);
  todos = paresTodos;
  paresTodos.forEach(paintTodo);
}
