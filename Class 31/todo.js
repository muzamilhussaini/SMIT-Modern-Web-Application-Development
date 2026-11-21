const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#list");
let todoArr = [];

function renderTodo() {
  ul.innerHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    const element = todoArr[i];
    ul.innerHTML += `${element}
    <button onclick="updateTodo(${i})">Update Todo Item</button>
    <button onclick="deleteTodo(${i})">Delete Todo Item</button>
    <br>`;
  }
}

function btnTodo() {
  todoArr.push(inp.value);
  console.log(todoArr);

  // console.log(inp.value);
  renderTodo();
  inp.value = "";
}

function updateTodo(index) {
  console.log("Updated");

  const updateItem = prompt("Update your todo item");
  todoArr.splice(index, 1, updateItem)
  renderTodo();
}


function deleteTodo(index) {
  console.log("Delete");

  todoArr.splice(index, 1)
  renderTodo();
}