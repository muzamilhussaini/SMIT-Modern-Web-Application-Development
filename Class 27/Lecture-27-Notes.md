# Lecture 27: JavaScript Arrays

## What is an array?

An array is an ordered collection of values stored in one variable. Each value has a position called an **index**. JavaScript array indexes start at `0`, so the first element is at index `0` and the last element is at `array.length - 1`.

```js
const colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // "Red"
console.log(colors.length); // 3
```

Arrays can hold values of different types, although keeping related values together usually makes code easier to understand.

## Why use arrays?

Arrays are useful when you need to:

- Keep a list of related values in one variable.
- Preserve the order of those values.
- Loop through a collection and process each item.
- Add, remove, search, or rearrange items with built-in methods.

## Array methods

The examples below use `console.log()` to show results. Some methods modify the existing array; others return a result without changing it.

### `push()`

Adds one or more items to the **end** of an array. It changes the array and returns its new length.

```js
const students = ["Muzamil", "Jawad"];
students.push("Rehman Ali");

console.log(students); // ["Muzamil", "Jawad", "Rehman Ali"]
```

### `pop()`

Removes and returns the **last** item. It changes the array. If the array is empty, it returns `undefined`.

```js
const fruits = ["apple", "banana", "mango"];
const lastFruit = fruits.pop();

console.log(lastFruit); // "mango"
console.log(fruits); // ["apple", "banana"]
```

### `unshift()`

Adds one or more items to the **beginning** of an array. It changes the array and returns its new length.

```js
const days = ["Tuesday", "Wednesday"];
days.unshift("Monday");

console.log(days); // ["Monday", "Tuesday", "Wednesday"]
```

### `shift()`

Removes and returns the **first** item. It changes the array. If the array is empty, it returns `undefined`.

```js
const colors = ["Red", "Orange", "Blue"];
const firstColor = colors.shift();

console.log(firstColor); // "Red"
console.log(colors); // ["Orange", "Blue"]
```

### `splice()`

Adds, removes, or replaces items at a chosen position. It changes the original array and returns an array containing the removed items.

Syntax: `array.splice(startIndex, deleteCount, item1, item2, ...)`

```js
const subjects = ["Islamiat Studies", "Physics", "Biology"];
subjects.splice(2, 0, "Math", "Science"); // Insert two items at index 2
console.log(subjects);
// ["Islamiat Studies", "Physics", "Math", "Science", "Biology"]

const removed = subjects.splice(1, 2); // Remove two items starting at index 1
console.log(removed); // ["Physics", "Math"]
console.log(subjects); // ["Islamiat Studies", "Science", "Biology"]
```

### `slice()`

Returns a shallow copy of part of an array. It does **not** change the original array. The ending index is excluded.

Syntax: `array.slice(startIndex, endIndex)`

```js
const countries = ["Pakistan", "Norway", "USA", "Germany"];
const firstThree = countries.slice(0, 3);

console.log(firstThree); // ["Pakistan", "Norway", "USA"]
console.log(countries); // Original array is unchanged
```

### `split()`

`split()` is a **string** method, not an array method. It divides a string wherever the separator occurs and returns an array.

```js
const fruitText = "apple,banana,mango";
const fruits = fruitText.split(",");

console.log(fruits); // ["apple", "banana", "mango"]

const languages = "HTML CSS JavaScript";
console.log(languages.split(" ")); // ["HTML", "CSS", "JavaScript"]
```

The separator matters: `"apple,banana".split("")` splits into individual characters, while `.split(",")` splits at commas.

### `join()`

Returns a string made from all array items, with the chosen separator between them. It does **not** change the array.

```js
const characters = ["J", "S"];
console.log(characters.join("")); // "JS"

const words = ["HTML", "CSS", "JavaScript"];
console.log(words.join(" ")); // "HTML CSS JavaScript"
```

### `concat()`

Returns a new array by combining the array with one or more values or arrays. The original arrays are not changed.

```js
const stationery = ["pen", "pencil"];
const moreStationery = ["eraser", "sharpener"];
const allStationery = stationery.concat(moreStationery);

console.log(allStationery); // ["pen", "pencil", "eraser", "sharpener"]
```

### `sort()`

Sorts the array **in place** and returns the same array. By default, values are sorted as strings, so numbers may not appear in numeric order.

```js
const values = [10, 5, 2, 8];
values.sort();
console.log(values); // [10, 2, 5, 8] (string-based order)

const numbers = [10, 5, 2, 8];
numbers.sort((a, b) => a - b); // Numeric ascending order
console.log(numbers); // [2, 5, 8, 10]

numbers.sort((a, b) => b - a); // Numeric descending order
console.log(numbers); // [10, 8, 5, 2]
```

For strings, the default sort is based on UTF-16 code units and is case-sensitive. Use a comparison function such as `localeCompare()` when you need language-aware text ordering.

### `reverse()`

Reverses the order of items **in place** and returns the same array.

```js
const letters = ["a", "b", "c"];
letters.reverse();

console.log(letters); // ["c", "b", "a"]
```

To reverse without changing the original, copy it first: `const reversed = [...letters].reverse();`.

### `indexOf()`

Returns the index of the first matching value, or `-1` if the value is not found. It uses strict equality for comparison.

```js
const colors = ["Yellow", "Green", "Blue"];
console.log(colors.indexOf("Blue")); // 2
console.log(colors.indexOf("blue")); // -1 (case-sensitive)
```

### `includes()`

Returns `true` if the array contains the specified value, otherwise `false`. It uses the same value comparison as `indexOf()` for most values, with the useful difference that `includes()` can find `NaN`.

```js
const cities = ["Quetta", "Karachi", "Lahore"];

console.log(cities.includes("Karachi")); // true
console.log(cities.includes("Islamabad")); // false
```

Use `includes()` for a yes/no check, and `indexOf()` when you need the item's position.

## Quick reference

| Method | Purpose | Changes the original array? |
|---|---|---|
| `push()` | Add items to the end | Yes |
| `pop()` | Remove the last item | Yes |
| `unshift()` | Add items to the beginning | Yes |
| `shift()` | Remove the first item | Yes |
| `splice()` | Insert, remove, or replace items | Yes |
| `slice()` | Copy a section of an array | No |
| `split()` | Split a string into an array | Not an array method |
| `join()` | Combine array items into a string | No |
| `concat()` | Combine arrays into a new array | No |
| `sort()` | Sort items | Yes |
| `reverse()` | Reverse item order | Yes |
| `indexOf()` | Find the first matching index | No |
| `includes()` | Check whether a value exists | No |

## Conclusion

Arrays let you organize ordered collections of values and work with them efficiently. These methods make it easy to add or remove items, copy or combine arrays, convert between strings and arrays, sort or reverse values, and search for items. Remember which methods change the original array and choose the method that best fits the task.
