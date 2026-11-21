# Lecture 31 - Todo App

## What Is a Todo App?

A Todo app is a simple application used to record tasks and manage them. It allows users to add new tasks, view existing tasks, update tasks, and delete tasks.

The basic operations are:

- **Create:** Add a new todo item.
- **Read:** Display the todo items.
- **Update:** Change an existing todo item.
- **Delete:** Remove a todo item.

These operations are known as **CRUD** operations.

## Todo App Elements

The HTML page contains three main elements:

```html
<input type="text" placeholder="Enter an input" id="inp">
<button id="btn" onclick="btnTodo()">Add Todo List</button>
<ul id="list"></ul>
```

- `inp` is the input field where the user enters a task.
- `btn` is the button used to add a task.
- `list` is an unordered list used to display the tasks.

## JavaScript Variables

The app selects HTML elements using `document.querySelector()`:

```js
const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#list");
```

The todo items are stored in an array:

```js
let todoArr = [];
```

An array is used because a todo app can contain multiple tasks.

## Adding a Todo Item

The `btnTodo()` function runs when the Add Todo List button is clicked.

```js
function btnTodo() {
  todoArr.push(inp.value);
  renderTodo();
  inp.value = "";
}
```

`push()` adds the input value to the end of `todoArr`. `renderTodo()` refreshes the list, and `inp.value = ""` clears the input field.

## Displaying Todo Items

The `renderTodo()` function clears and redraws the list:

```js
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
```

- `ul.innerHTML = ""` removes the previous list.
- The `for` loop goes through every todo item.
- A text item and two buttons are displayed for each task.
- The array index is passed to the update and delete functions.

## Updating a Todo Item

The `updateTodo(index)` function changes an item at a specific array index:

```js
function updateTodo(index) {
  const updateItem = prompt("Update your todo item");
  todoArr.splice(index, 1, updateItem);
  renderTodo();
}
```

`prompt()` asks the user for the updated text. `splice()` removes the old item and inserts the new item at the same index.

## Deleting a Todo Item

The `deleteTodo(index)` function removes an item from the array:

```js
function deleteTodo(index) {
  todoArr.splice(index, 1);
  renderTodo();
}
```

The `splice(index, 1)` method removes one item starting at the given index.

## Array Methods Used

| Method | Purpose |
| --- | --- |
| `push()` | Adds an item to the end of an array |
| `splice()` | Removes or replaces array items |
| `length` | Returns the number of items in an array |

## How the App Works

1. The user enters a task in the input field.
2. The user clicks the Add Todo List button.
3. `btnTodo()` adds the task to `todoArr`.
4. `renderTodo()` displays all tasks on the page.
5. The Update button opens a prompt and replaces the selected task.
6. The Delete button removes the selected task.

## Practice

1. Add a check to prevent empty todo items.
2. Add a confirmation before deleting a todo item.
3. Change the app to save todos in `localStorage`.
4. Add one button to delete all todo items.

## Conclusion

The Todo App demonstrates how HTML, JavaScript, arrays, functions, and the DOM work together to manage tasks. It provides a practical understanding of CRUD operations and helps build a foundation for creating more advanced web applications.
