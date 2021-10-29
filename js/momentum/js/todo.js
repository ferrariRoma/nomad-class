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
