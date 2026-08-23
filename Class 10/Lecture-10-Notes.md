# 📖 Lecture 10: CSS Box Model, Pseudo Classes & Pseudo Elements

## Introduction

CSS not only styles elements but also controls their size, spacing, behavior, and appearance in different states.

In this lecture, we learned:

- CSS Box Model
- Margin
- Padding
- Width & Height
- Min Width & Max Width
- Min Height & Max Height
- Overflow
- Pseudo Classes
- Pseudo Elements
- Centering Elements
- Auto Margin

---

# CSS Box Model

Every HTML element is treated as a rectangular box.

The CSS Box Model consists of:

```text
+----------------------+
|       Margin         |
|  +----------------+  |
|  |    Border      |  |
|  | +------------+ |  |
|  | |  Padding   | |  |
|  | | +--------+ | |  |
|  | | |Content | | |  |
|  | | +--------+ | |  |
|  | +------------+ |  |
|  +----------------+  |
+----------------------+
```

The box model contains:

1. Content
2. Padding
3. Border
4. Margin

---

# Content Area

The actual content inside an element.

Example:

```html
<p>Hello World</p>
```

---

# Padding

Padding creates space inside the border.

```css
div {
    padding: 20px;
}
```

Example:

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
```

Shortcut:

```css
padding: 10px 20px;
```

---

# Border

Border surrounds the padding and content.

```css
div {
    border: 2px solid black;
}
```

Syntax:

```css
border: width style color;
```

Example:

```css
border: 3px dashed red;
```

---

# Margin

Margin creates space outside the border.

```css
div {
    margin: 20px;
}
```

Example:

```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;
```

Shortcut:

```css
margin: 10px 20px;
```

---

# Width

Controls element width.

```css
div {
    width: 300px;
}
```

---

# Height

Controls element height.

```css
div {
    height: 200px;
}
```

---

# Min Width

Sets minimum width.

```css
div {
    min-width: 200px;
}
```

The element cannot become smaller than 200px.

---

# Max Width

Sets maximum width.

```css
div {
    max-width: 800px;
}
```

The element cannot become larger than 800px.

---

# Min Height

Sets minimum height.

```css
div {
    min-height: 200px;
}
```

---

# Max Height

Sets maximum height.

```css
div {
    max-height: 500px;
}
```

---

# Overflow

Controls what happens when content exceeds available space.

---

## Overflow Visible

Default value.

```css
overflow: visible;
```

Content remains visible outside the box.

---

## Overflow Hidden

```css
overflow: hidden;
```

Extra content is hidden.

---

## Overflow Scroll

```css
overflow: scroll;
```

Always shows scrollbars.

---

## Overflow Auto

```css
overflow: auto;
```

Shows scrollbars only when needed.

---

# Pseudo Classes

Pseudo classes style elements in a specific state.

Syntax:

```css
selector:pseudo-class {
}
```

---

## Hover

Applies when mouse moves over an element.

```css
button:hover {
    background-color: green;
}
```

---

## Active

Applies when element is clicked.

```css
button:active {
    background-color: red;
}
```

---

## Visited

Applies to visited links.

```css
a:visited {
    color: purple;
}
```

---

## Link

Applies to unvisited links.

```css
a:link {
    color: blue;
}
```

---

## First Child

Targets first child element.

```css
li:first-child {
    color: red;
}
```

---

## Last Child

Targets last child element.

```css
li:last-child {
    color: green;
}
```

---

## Nth Child

Targets a specific child.

```css
li:nth-child(3) {
    color: blue;
}
```

---

# Pseudo Elements

Pseudo elements style specific parts of an element.

Syntax:

```css
selector::pseudo-element {
}
```

---

## First Letter

```css
p::first-letter {
    font-size: 40px;
}
```

---

## First Line

```css
p::first-line {
    color: blue;
}
```

---

## Before

Adds content before an element.

```css
h1::before {
    content: "🔥 ";
}
```

---

## After

Adds content after an element.

```css
h1::after {
    content: " 🚀";
}
```

---

## Selection

Styles selected text.

```css
::selection {
    background-color: yellow;
}
```

---

# Centering Text

Method 1:

```css
h1 {
    text-align: center;
}
```

Used for:

- Text
- Inline elements

---

# Centering Divs

Method 2:

```css
.box {
    width: 300px;
    margin: 0 auto;
}
```

Explanation:

```text
0 = Top and Bottom

auto = Left and Right
```

Result:

Element becomes centered horizontally.

---

# Centering Images

Images are inline elements by default.

Convert them to block elements:

```css
img {
    display: block;
    margin: 0 auto;
}
```

Result:

Image moves to center.

---

# Display Property Revision

## Block

Starts on a new line.

```css
display: block;
```

Examples:

```html
<div>
<p>
<h1>
```

---

## Inline

Stays in same line.

```css
display: inline;
```

Examples:

```html
<span>
<a>
<strong>
```

---

## Inline Block

Behaves like inline but accepts width and height.

```css
display: inline-block;
```

---

## None

Hides element completely.

```css
display: none;
```

---

# Important Difference

## Visibility Hidden

```css
visibility: hidden;
```

Element hidden but space remains.

---

## Display None

```css
display: none;
```

Element removed completely.

---

# Best Practices

✅ Use padding for internal spacing

✅ Use margin for external spacing

✅ Use max-width for responsive layouts

✅ Use overflow auto when content may grow

✅ Use pseudo classes for interactivity

✅ Use pseudo elements for decorative content

✅ Use margin auto to center block elements

---

# Lecture Summary

Topics Covered:

✅ CSS Box Model

✅ Content

✅ Padding

✅ Border

✅ Margin

✅ Width

✅ Height

✅ Min Width

✅ Max Width

✅ Min Height

✅ Max Height

✅ Overflow

✅ Visible

✅ Hidden

✅ Scroll

✅ Auto

✅ Pseudo Classes

✅ Hover

✅ Active

✅ Link

✅ Visited

✅ First Child

✅ Last Child

✅ Nth Child

✅ Pseudo Elements

✅ First Letter

✅ First Line

✅ Before

✅ After

✅ Selection

✅ Text Align Center

✅ Margin Auto

✅ Display Block

✅ Centering Images

---

# Conclusion

The CSS Box Model is one of the most important concepts in web development. Understanding margins, padding, borders, sizing, overflow, pseudo classes, and pseudo elements helps create responsive and interactive websites.