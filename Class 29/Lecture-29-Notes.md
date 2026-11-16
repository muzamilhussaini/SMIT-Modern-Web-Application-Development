# Class 29 — JavaScript Loops

## Learning goals

By the end of this lecture, you should be able to:

- Repeat code with `while` and `do...while` loops.
- Recognize and prevent an infinite loop.
- Explain the difference between pre-increment and post-increment.
- Loop through an array with a `for` loop.

## `while` loop

A `while` loop repeats its body as long as its condition is `true`. Check the condition before each iteration.

```js
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

This prints the numbers 1 through 5. The counter must change so the condition eventually becomes false.

## `do...while` loop

A `do...while` loop runs its body first, then checks the condition. Therefore, its body always runs at least once.

```js
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);
```

Even if the condition starts out false, the body runs once:

```js
let number = 10;

do {
    console.log("This runs once.");
} while (number < 5);
```

## Infinite loops

An infinite loop is a loop whose condition never becomes false. A common cause is forgetting to update the loop variable:

```js
// Avoid: count never changes, so count <= 5 stays true.
let count = 1;

// while (count <= 5) {
//     console.log(count);
// }
```

Make sure each loop can finish. If you need to stop a loop early, `break` exits it:

```js
let count = 1;

while (true) {
    console.log(count);

    if (count === 3) {
        break;
    }

    count++;
}
```

Use `while (true)` only when the loop has a clear exit condition.

## Increment and decrement

Increment adds one; decrement subtracts one:

```js
let value = 4;

value++; // value is now 5
value--; // value is now 4
```

### Pre-increment and post-increment

Both `++value` and `value++` increase `value` by one. The difference is the value of the expression:

- `++value` (pre-increment) changes the value first, then produces the new value.
- `value++` (post-increment) produces the old value first, then changes the value.

```js
let value = 4;
console.log(++value); // 5: increment, then use the value

value = 4;
console.log(value++); // 4: use the value, then increment
console.log(value);   // 5
```

The same order distinction applies to pre-decrement (`--value`) and post-decrement (`value--`). In loop update expressions, either form is commonly used:

```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

## Looping through an array with `for`

A `for` loop is useful when you know how to count through the array indexes. Array indexes start at `0`, and the last index is `array.length - 1`.

```js
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

The three parts of the loop header are:

```js
for (initialization; condition; update) {
    // repeated code
}
```

- **Initialization:** `let i = 0` starts at the first index.
- **Condition:** `i < fruits.length` keeps the loop within the array.
- **Update:** `i++` moves to the next index.

To display each item in a paragraph, for example:

```js
const colors = ["red", "green", "blue"];
const output = document.querySelector("#output");

for (let i = 0; i < colors.length; i++) {
    output.textContent += `${colors[i]} `;
}
```

## Quick comparison

| Loop | When the condition is checked | Minimum runs |
| --- | --- | --- |
| `while` | Before the body | 0 |
| `do...while` | After the body | 1 |
| `for` | Before each iteration | 0 |

## Practice

1. Use a `while` loop to print the numbers from 10 down to 1.
2. Use a `do...while` loop to print the numbers from 1 through 3.
3. Use a `for` loop to print every item in `["Ali", "Sara", "Ahmed"]`.
4. Change one loop to use `i--` and make it count backward without creating an infinite loop.

## Conclusion

Loops let a program repeat instructions without writing the same code again and again. Use `while` when repetition depends on a condition, `do...while` when the body must run at least once, and `for` when counting through a range or array. Update loop variables carefully to avoid infinite loops, and remember that pre-increment changes a value before the expression is evaluated while post-increment changes it afterward.
