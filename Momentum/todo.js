const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList"); //get what we need in html

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo() {
  console.log(event.target);
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li); //여기까지하면 새로고침시 다시 뜸--->todo list clean!!
  const cleanToDos = toDos.filter(function(todo) {
    return toDo.id !== parseInt(li.id); //todo id == num ,li id == string
  });
  console.log(cleanToDos);
  toDos = cleanToDos;
  savetoDos();
}

function savetoDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //change Object into String
}

function paintToDo(text) {
  //console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteToDo);

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn); //i put span and delBtn inside the li
  li.id = newId; //when i delete i have to know whith emoji to delete so i have to give them id
  todoList.append(li); //i created!!
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  savetoDos(); //after you save something in toDos!!
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);
  todoInput.value = ""; //when you submmit clear the input
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //console.log(loadedToDos);
    //string으로 넘어왔기때문에 자바스크립트가 처리할 수 있게 오브젝트로 바꿔주기
    const parsedToDos = JSON.parse(loadedToDos);
    //console.log(parsedToDos);
    parsedToDos.forEach(function(toDo) {
      console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
} //투두 리스트 가져와서 오브젝트 스트링으로 바꿔준 다음에 toDo.text paint 해주기!

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
