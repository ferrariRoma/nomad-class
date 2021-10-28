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
