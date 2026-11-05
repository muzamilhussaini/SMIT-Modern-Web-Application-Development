# 📘 Class 26: JavaScript DOM Manipulation

## 📌 1. Introduction to DOM

DOM stands for **Document Object Model**.

The DOM is a programming interface that allows JavaScript to access and manipulate HTML documents.

When a browser loads an HTML page, it creates a DOM tree representing the document. JavaScript can use this structure to change the content, structure, and styles of a webpage.

### Example HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Welcome to JavaScript DOM.</p>
</body>
</html>
```

JavaScript can access and modify the heading and paragraph without changing the original HTML file.

### DOM Tree Structure

```text
Document
   |
   HTML
   |
   |--- HEAD
   |      |
   |      |--- TITLE
   |
   |--- BODY
          |
          |--- H1
          |
          |--- P
```

**Important:** The DOM represents an HTML document as a tree of objects called nodes.

## 🔍 2. Selecting HTML Elements

JavaScript provides different methods to select HTML elements from the DOM.

### A. `getElementById()`

Selects an element using its unique ID.

**HTML:**

```html
<h1 id="heading">Hello World</h1>
```

**JavaScript:**

```js
const heading = document.getElementById("heading");

console.log(heading);
```

### B. `getElementsByClassName()`

Selects all elements that have a specific class name.

**HTML:**

```html
<p class="text">First Paragraph</p>
<p class="text">Second Paragraph</p>
```

**JavaScript:**

```js
const paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);
```

It returns an `HTMLCollection`. To access individual elements:

```js
console.log(paragraphs[0]);
console.log(paragraphs[1]);
```

### C. `getElementsByTagName()`

Selects elements using their HTML tag name.

```js
const headings = document.getElementsByTagName("h1");

console.log(headings);
```

It also returns an `HTMLCollection`.

### D. `querySelector()`

Selects the first element that matches a CSS selector.

**HTML:**

```html
<h1 id="heading">Hello World</h1>
<p class="description">Learning JavaScript</p>
```

**JavaScript:**

```js
const heading = document.querySelector("#heading");
const paragraph = document.querySelector(".description");

console.log(heading);
console.log(paragraph);
```

You can use CSS selector syntax:

- `#heading` selects an element by ID.
- `.description` selects an element by class.
- `p` selects the first paragraph.

### E. `querySelectorAll()`

Selects all elements that match a CSS selector.

**HTML:**

```html
<p class="text">First</p>
<p class="text">Second</p>
<p class="text">Third</p>
```

**JavaScript:**

```js
const paragraphs = document.querySelectorAll(".text");

console.log(paragraphs);
```

It returns a `NodeList`. You can access individual elements using indexes:

```js
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);
```

### Comparison of Selection Methods

| Method | Description | Return type |
|---|---|---|
| `getElementById()` | Selects by ID | Element or `null` |
| `getElementsByClassName()` | Selects by class | `HTMLCollection` |
| `getElementsByTagName()` | Selects by tag | `HTMLCollection` |
| `querySelector()` | Selects the first matching CSS selector | Element or `null` |
| `querySelectorAll()` | Selects all matching CSS selectors | `NodeList` |

## ✏️ 3. Changing HTML Content

JavaScript provides properties to change the content of HTML elements.

### A. `innerHTML`

Gets or sets the HTML markup inside an element.

**HTML:**

```html
<div id="container">
    <h2>Old Heading</h2>
</div>
```

**JavaScript:**

```js
const container = document.getElementById("container");

container.innerHTML = "<h2>New Heading</h2>";
```

The old heading is replaced with the new heading. `innerHTML` can also insert HTML elements.

### B. `textContent`

Gets or sets the text content of an element.

```html
<h1 id="heading">Old Text</h1>
```

```js
const heading = document.querySelector("#heading");

heading.textContent = "New Text";
```

**Output:**

```text
New Text
```

Unlike `innerHTML`, `textContent` treats HTML tags as plain text.

### C. `innerText`

Gets or sets the rendered text of an element.

```js
const heading = document.querySelector("#heading");

heading.innerText = "Updated Heading";
```

### Difference Between `innerHTML`, `innerText`, and `textContent`

| Property | Purpose |
|---|---|
| `innerHTML` | Reads or changes HTML markup |
| `innerText` | Reads or changes rendered text |
| `textContent` | Reads or changes text content, including hidden text |

**Security note:** Avoid placing untrusted user input directly into `innerHTML`. Use `textContent` when you only need to display text.

## 🎨 4. Changing CSS Styles Using JavaScript

JavaScript can change the CSS styles of HTML elements through the `style` property.

**HTML:**

```html
<h1 id="heading">Hello World</h1>
```

**JavaScript:**

```js
const heading = document.getElementById("heading");

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";
heading.style.textAlign = "center";
```

### Important CSS Property Naming

In JavaScript, CSS properties written with hyphens are usually converted into camelCase.

| CSS property | JavaScript property |
|---|---|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `text-align` | `textAlign` |
| `border-radius` | `borderRadius` |
| `margin-top` | `marginTop` |

## 🏷️ 5. Working with HTML Attributes

HTML attributes provide additional information about HTML elements.

JavaScript can read, add, change, and remove attributes.

### A. `getAttribute()`

Gets the value of an attribute.

```html
<img id="photo" src="image.jpg" alt="My Photo">
```

```js
const image = document.getElementById("photo");

console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));
```

### B. `setAttribute()`

Adds a new attribute or changes an existing attribute.

```js
image.setAttribute("src", "new-image.jpg");
image.setAttribute("alt", "Updated Photo");
```

### C. `removeAttribute()`

Removes an attribute from an element.

```js
image.removeAttribute("alt");
```

### D. `hasAttribute()`

Checks whether an element has a particular attribute.

```js
console.log(image.hasAttribute("src"));
```

It returns `true` if the attribute exists and `false` otherwise.

## 🧩 6. Working with CSS Classes

JavaScript provides `classList` to work with CSS classes.

### A. `classList.add()`

Adds a CSS class to an element.

```js
const heading = document.querySelector("h1");

heading.classList.add("active");
```

### B. `classList.remove()`

Removes a CSS class.

```js
heading.classList.remove("active");
```

### C. `classList.toggle()`

Adds a class if it does not exist, or removes it if it already exists.

```js
heading.classList.toggle("active");
```

### D. `classList.contains()`

Checks whether an element contains a particular class.

```js
console.log(heading.classList.contains("active"));
```

### Complete Example

```html
<style>
    .active {
        color: white;
        background-color: green;
        padding: 10px;
    }
</style>

<h1 id="heading">Hello World</h1>
```

```js
const heading = document.getElementById("heading");

heading.classList.add("active");
```

## ➕ 7. Creating HTML Elements

JavaScript allows us to create new HTML elements dynamically.

### `createElement()`

Creates a new HTML element.

```js
const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created using JavaScript.";
```

Creating an element does not automatically display it on the webpage. We need to add it to the DOM.

### `appendChild()`

Adds a new element as the last child of another element.

**HTML:**

```html
<div id="container"></div>
```

**JavaScript:**

```js
const container = document.getElementById("container");

const paragraph = document.createElement("p");

paragraph.textContent = "Hello from JavaScript!";

container.appendChild(paragraph);
```

### `append()`

Adds one or more nodes or text values at the end of an element.

```js
const container = document.getElementById("container");

const heading = document.createElement("h2");

heading.textContent = "New Heading";

container.append(heading);
```

### `prepend()`

Adds content at the beginning of an element.

```js
container.prepend(heading);
```

## ➖ 8. Removing HTML Elements

JavaScript can also remove existing elements from the DOM.

### `remove()`

Removes an element directly.

**HTML:**

```html
<p id="paragraph">This paragraph will be removed.</p>
```

**JavaScript:**

```js
const paragraph = document.getElementById("paragraph");

paragraph.remove();
```

### `removeChild()`

Removes a child element from its parent.

**HTML:**

```html
<div id="container">
    <p id="paragraph">Hello World</p>
</div>
```

**JavaScript:**

```js
const container = document.getElementById("container");
const paragraph = document.getElementById("paragraph");

container.removeChild(paragraph);
```

## 🖱️ 9. JavaScript Events

Events are actions or occurrences that happen in the browser, such as clicking a button, typing on a keyboard, or submitting a form.

JavaScript can respond to these events.

Common events include:

| Event | Description |
|---|---|
| `click` | When an element is clicked |
| `dblclick` | When an element is double-clicked |
| `mouseover` | When the mouse moves over an element |
| `mouseout` | When the mouse leaves an element |
| `keydown` | When a keyboard key is pressed |
| `keyup` | When a keyboard key is released |
| `input` | When an input value changes |
| `change` | When a value is committed or changed |
| `submit` | When a form is submitted |
| `load` | When a resource or page finishes loading |

## 🖱️ 10. Handling Events with `addEventListener()`

The `addEventListener()` method attaches an event handler to an element.

**Syntax:**

```js
element.addEventListener("event", function() {
    // Code to execute
});
```

### Example: Button Click

**HTML:**

```html
<button id="btn">Click Me</button>
```

**JavaScript:**

```js
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    console.log("Button was clicked!");
});
```

When the user clicks the button, the message appears in the console.

### Example: Changing Heading on Click

**HTML:**

```html
<h1 id="heading">Old Heading</h1>

<button id="btn">Change Heading</button>
```

**JavaScript:**

```js
const heading = document.getElementById("heading");
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    heading.textContent = "New Heading";
});
```

## 🎯 11. The Event Object

When an event occurs, JavaScript provides an event object containing information about that event.

**HTML:**

```html
<button id="btn">Click Me</button>
```

**JavaScript:**

```js
const button = document.getElementById("btn");

button.addEventListener("click", function(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
});
```

- `event` contains information about the event.
- `event.target` identifies the element that triggered the event.
- `event.type` gives the event name.

## 📝 12. Working with Input Fields

JavaScript can read values entered into HTML input fields using the `value` property.

**HTML:**

```html
<input type="text" id="username" placeholder="Enter your name">

<button id="btn">Submit</button>

<p id="result"></p>
```

**JavaScript:**

```js
const username = document.getElementById("username");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    result.textContent = `Hello, ${username.value}!`;
});
```

The `value` property retrieves the current value of the input field.

## 🔄 13. DOM Traversal

DOM traversal means moving between related elements in the DOM tree.

Some useful properties include:

| Property | Description |
|---|---|
| `parentElement` | Gets the parent element |
| `children` | Gets the child elements |
| `firstElementChild` | Gets the first child element |
| `lastElementChild` | Gets the last child element |
| `nextElementSibling` | Gets the next sibling element |
| `previousElementSibling` | Gets the previous sibling element |

### Example

**HTML:**

```html
<div id="parent">
    <p id="first">First Paragraph</p>
    <p id="second">Second Paragraph</p>
</div>
```

**JavaScript:**

```js
const first = document.getElementById("first");

console.log(first.parentElement);
console.log(first.nextElementSibling);
console.log(first.parentElement.children);
```

## ⏳ 14. DOMContentLoaded Event

The `DOMContentLoaded` event fires when the HTML document has been completely parsed and the DOM has been constructed.

It is useful when we want to make sure HTML elements are available before selecting them.

```js
document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("h1");

    console.log(heading);
});
```

This is especially useful when JavaScript is loaded in the document's `<head>`.

Another common approach is placing the script just before the closing `</body>` tag or using the `defer` attribute on an external script.

## 🧪 15. Complete DOM Manipulation Mini Project

### Project: Interactive Text Changer

This small project demonstrates element selection, event handling, changing text, and changing styles.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>

    <h1 id="heading">Welcome to JavaScript DOM</h1>

    <button id="changeText">Change Text</button>
    <button id="changeColor">Change Color</button>

    <script src="script.js"></script>
</body>
</html>
```

**JavaScript (`script.js`):**

```js
const heading = document.getElementById("heading");

const changeText = document.getElementById("changeText");
const changeColor = document.getElementById("changeColor");

changeText.addEventListener("click", function() {
    heading.textContent = "DOM Manipulation is Easy!";
});

changeColor.addEventListener("click", function() {
    heading.style.color = "blue";
});
```

## ⚠️ 16. Common Mistakes to Avoid

1. **Incorrect selectors:** Remember that IDs use `#` and classes use `.` in CSS selector methods.
2. **Selecting before elements exist:** Make sure the DOM is loaded before selecting elements.
3. **Confusing `innerHTML` and `textContent`:** `innerHTML` parses HTML, while `textContent` works with text.
4. **Forgetting to append elements:** `createElement()` creates an element but does not automatically insert it into the page.
5. **Incorrect CSS property names:** Use camelCase, such as `backgroundColor`, in JavaScript.
6. **Calling an event handler incorrectly:** Pass a function to `addEventListener()` rather than executing it immediately.
7. **Using an incorrect element ID:** Make sure the ID in JavaScript matches the HTML ID.

## 🎯 17. What I Learned in Class 26

After learning DOM manipulation, I should be able to:

- Understand the Document Object Model.
- Understand the DOM tree structure.
- Select HTML elements using different methods.
- Change HTML content using `innerHTML`, `innerText`, and `textContent`.
- Change CSS styles using JavaScript.
- Get, set, and remove HTML attributes.
- Add, remove, toggle, and check CSS classes.
- Create and remove HTML elements.
- Understand and handle browser events.
- Use `addEventListener()` to respond to user actions.
- Read input values using JavaScript.
- Navigate between parent, child, and sibling elements.

## ✅ Conclusion

DOM manipulation is an important part of JavaScript because it allows us to make static HTML pages interactive and dynamic. By selecting elements, changing content and styles, creating new elements, and handling events, we can build interactive websites and web applications.
