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
