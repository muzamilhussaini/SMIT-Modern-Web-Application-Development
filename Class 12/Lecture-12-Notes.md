# 📖 Lecture 12: CSS Flexbox

## Introduction

Flexbox (Flexible Box Layout) is a CSS layout model used to arrange items inside a container.

It helps developers easily align, distribute, and organize elements without using floats or complex positioning.

Flexbox is one-dimensional, meaning it works in either a row or a column.

---

# What is Flexbox?

Flexbox consists of:

- Flex Container (Parent)
- Flex Items (Children)

Example:

```html
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

```css
.container {
    display: flex;
}
```

When `display: flex` is applied, all child elements become flex items.

---

# Display Flex

Used to activate Flexbox.

```css
.container {
    display: flex;
}
```

Result:

Items appear in a row by default.

---

# Main Axis

The direction in which flex items are placed.

Default:

```css
flex-direction: row;
```

```text
Main Axis →
[1] [2] [3]
```

---

# Cross Axis

The axis perpendicular to the main axis.

```text
[1]
[2]
[3]
↓
Cross Axis
```

---

# Flex Direction

Controls the direction of flex items.

## Row (Default)

```css
.container {
    flex-direction: row;
}
```

```text
[1] [2] [3]
```

---

## Row Reverse

```css
.container {
    flex-direction: row-reverse;
}
```

```text
[3] [2] [1]
```

---

## Column

```css
.container {
    flex-direction: column;
}
```

```text
[1]
[2]
[3]
```

---

## Column Reverse

```css
.container {
    flex-direction: column-reverse;
}
```

```text
[3]
[2]
[1]
```

---

# Justify Content

Controls alignment along the Main Axis.

---

## Flex Start

```css
justify-content: flex-start;
```

```text
[1][2][3]
```

---

## Center

```css
justify-content: center;
```

```text
      [1][2][3]
```

---

## Flex End

```css
justify-content: flex-end;
```

```text
                [1][2][3]
```

---

## Space Between

```css
justify-content: space-between;
```

```text
[1]     [2]     [3]
```

---

## Space Around

```css
justify-content: space-around;
```

```text
  [1]   [2]   [3]
```

---

## Space Evenly

```css
justify-content: space-evenly;
```

```text
   [1]   [2]   [3]
```

---

# Align Items

Controls alignment on the Cross Axis.

---

## Stretch (Default)

```css
align-items: stretch;
```

---

## Center

```css
align-items: center;
```

---

## Flex Start

```css
align-items: flex-start;
```

---

## Flex End

```css
align-items: flex-end;
```

---

# Flex Wrap

Controls whether items stay on one line or move to the next line.

---

## No Wrap (Default)

```css
flex-wrap: nowrap;
```

All items stay on one line.

---

## Wrap

```css
flex-wrap: wrap;
```

Items move to the next line when needed.

---

## Wrap Reverse

```css
flex-wrap: wrap-reverse;
```

Items wrap in reverse order.

---

# Gap

Adds spacing between flex items.

```css
.container {
    gap: 20px;
}
```

Example:

```text
[1]  [2]  [3]
```

---

# Flex Flow

Shorthand for:

```css
flex-direction
flex-wrap
```

Example:

```css
.container {
    flex-flow: row wrap;
}
```

Equivalent to:

```css
.container {
    flex-direction: row;
    flex-wrap: wrap;
}
```

---

# Order

Changes item order without changing HTML.

```css
.item1 {
    order: 3;
}

.item2 {
    order: 1;
}
```

Items appear according to order value.

---

# Flex Grow

Controls how much an item can grow.

```css
.item {
    flex-grow: 1;
}
```

Example:

```css
.item1 {
    flex-grow: 2;
}
```

Item 1 grows twice as much.

---

# Flex Shrink

Controls shrinking when space is limited.

```css
.item {
    flex-shrink: 1;
}
```

---

# Flex Basis

Defines initial size of an item.

```css
.item {
    flex-basis: 200px;
}
```

---

# Flex Shorthand

```css
flex: grow shrink basis;
```

Example:

```css
flex: 1 1 200px;
```

---

# Align Self

Used on individual flex items.

```css
.item {
    align-self: center;
}
```

Overrides align-items for one item.

---

# Centering With Flexbox

Most common interview question.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Result:

Perfect horizontal and vertical centering.

---

# Real World Uses

✅ Navigation Bars

✅ Hero Sections

✅ Cards Layout

✅ Pricing Sections

✅ Image Galleries

✅ Dashboards

✅ Responsive Layouts

---

# Best Practices

✅ Use Flexbox for one-dimensional layouts

✅ Use gap instead of margins when possible

✅ Use justify-content for horizontal alignment

✅ Use align-items for vertical alignment

✅ Use flex-wrap for responsive layouts

---

# Lecture Summary

Topics Covered:

✅ display: flex

✅ main axis

✅ cross axis

✅ flex-direction

✅ row

✅ row-reverse

✅ column

✅ column-reverse

✅ justify-content

✅ align-items

✅ flex-wrap

✅ gap

✅ flex-flow

✅ order

✅ flex-grow

✅ flex-shrink

✅ flex-basis

✅ flex shorthand

✅ align-self

---

# Conclusion

Flexbox is one of the most important CSS layout systems. It makes alignment and spacing much easier and is widely used in modern web development.

Mastering Flexbox will help you build responsive and professional websites efficiently.
