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
