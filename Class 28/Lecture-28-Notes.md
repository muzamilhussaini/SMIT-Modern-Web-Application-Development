# Class 28 For loop in JS

A `for` loop repeats a block of code while a condition is true. It is useful when you know how many times you want to repeat an action, or when you want to move through a sequence one item at a time.

## Syntax

```js
for (initialization; condition; update) {
    // Code to repeat
}
```

- **Initialization** runs once before the loop starts. It commonly creates a counter.
- **Condition** is checked before each repetition. The loop continues while it is `true`.
- **Update** runs after each repetition, often increasing or decreasing the counter.
- **Loop body** is the code inside the braces.

## Counting up

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

The counter starts at `1`. The loop runs while `i <= 5`, and `i++` adds one after each pass.

## Counting down

```js
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

`i--` subtracts one each time, so this loop prints from `5` down to `1`.

## Using a condition inside the loop

The remainder operator (`%`) can help select numbers that meet a rule. A number is even when its remainder after division by `2` is `0`.

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

## Calculating a total

Use a variable declared before the loop to keep a running total.

```js
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum); // 5050
```

## Looping through a string

Strings have a `length` property, and each character can be accessed by its index. String indexes start at `0`.

```js
const word = "JavaScript";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
```

## Nested `for` loops

A loop can be placed inside another loop. For every run of the outer loop, the inner loop completes all its runs.

```js
for (let row = 1; row <= 3; row++) {
    let stars = "";

    for (let column = 1; column <= row; column++) {
        stars += "*";
    }

    console.log(stars);
}
```

Output:

```text
*
**
***
```

## `break` and `continue`

- `break` stops the loop immediately.
- `continue` skips the rest of the current pass and moves to the next one.

```js
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 7) {
        break;
    }
    console.log(i);
}
```

This prints `1`, `2`, `4`, `5`, and `6`.

## Common mistakes

- **Wrong condition:** Check whether the counter should use `<` or `<=`. For example, `i < 5` stops before `5`, while `i <= 5` includes it.
- **Wrong update:** Make sure the counter moves toward the point where the condition becomes false. Otherwise, the loop may never end.
- **Off-by-one errors:** Remember that string and array indexes start at `0`.
- **Extra semicolons:** Do not put a semicolon after the `for (...)` parentheses; the loop body should follow.

## Practice

1. Print the numbers from `20` down to `1`.
2. Print the multiples of `5` from `5` through `100`.
3. Calculate the factorial of `5` using a `for` loop. (`5!` is `5 × 4 × 3 × 2 × 1`.)
4. Count the vowels in `"javascript programming"` using a `for` loop.
