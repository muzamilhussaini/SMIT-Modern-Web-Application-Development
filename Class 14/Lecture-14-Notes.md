# 📖 Lecture 14: CSS Grid

## Introduction

CSS Grid is a powerful two-dimensional layout system that allows developers to create layouts using rows and columns.

Unlike Flexbox, which works in one direction (row or column), Grid works in both directions at the same time.

In this lecture, we learned:

- display: grid
- grid-template-columns
- grid-template-rows
- fr unit
- repeat()
- gap
- Grid Lines
- grid-column
- grid-row
- span
- grid-template-areas
- grid-area
- justify-items
- align-items
- place-items
- justify-content
- align-content
- place-content
- minmax()
- auto-fit
- auto-fill

---

# What is CSS Grid?

CSS Grid is a CSS layout system used to arrange elements into rows and columns.

It helps create:

- Website layouts
- Dashboards
- Galleries
- Responsive designs
- Complex page structures

---

# display: grid

The `display: grid` property converts an element into a grid container.

```css
.container{
    display: grid;
}
```

All direct child elements become grid items.

---

# grid-template-columns

Used to define the number and width of columns.

```css
.container{
    grid-template-columns: 200px 200px 200px;
}
```

This creates 3 columns, each 200px wide.

You can also use fractions:

```css
grid-template-columns: 1fr 1fr 1fr;
```

---

# grid-template-rows

Used to define the number and height of rows.

```css
.container{
    grid-template-rows: 100px 100px;
}
```

Creates 2 rows, each 100px high.

---

# fr Unit

`fr` means Fraction.

It divides available space into equal portions.

```css
grid-template-columns: 1fr 2fr 1fr;
```

Explanation:

```text
1fr = 25%
2fr = 50%
1fr = 25%
```

The middle column receives twice as much space.

---

# repeat()

Used to avoid writing the same values multiple times.

Instead of:

```css
grid-template-columns: 1fr 1fr 1fr;
```

We can write:

```css
grid-template-columns: repeat(3, 1fr);
```

This means:

```text
Repeat 1fr three times
```

---

# gap

Adds spacing between grid items.

```css
gap: 20px;
```

Example:

```css
.container{
    display: grid;
    gap: 20px;
}
```

---

# row-gap

Adds vertical spacing between rows.

```css
row-gap: 20px;
```

---

# column-gap

Adds horizontal spacing between columns.

```css
column-gap: 10px;
```

---

# Grid Lines

Every Grid has numbered lines.

```text
1   2   3   4
|---|---|---|
|   |   |   |
|---|---|---|
```

Grid items can start and end on specific lines.

---

# grid-column

Controls horizontal placement of an item.

```css
.item{
    grid-column: 1 / 3;
}
```

Meaning:

```text
Start at line 1
End at line 3
```

The item spans across two columns.

---

# grid-row

Controls vertical placement.

```css
.item{
    grid-row: 1 / 3;
}
```

Meaning:

```text
Start at row line 1
End at row line 3
```

---

# span

Used to occupy multiple columns or rows.

```css
.item{
    grid-column: span 2;
}
```

Meaning:

```text
Take the space of 2 columns
```

Example:

```css
.item{
    grid-row: span 3;
}
```

Occupies 3 rows.

---

# grid-template-areas

Used to create named layout sections.

```css
.container{
    grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

Visual layout:

```text
HEADER HEADER
SIDEBAR MAIN
FOOTER FOOTER
```

---

# grid-area

Assigns an item to a named area.

```css
.header{
    grid-area: header;
}
```

```css
.sidebar{
    grid-area: sidebar;
}
```

```css
.main{
    grid-area: main;
}
```

---

# justify-items

Aligns items horizontally inside their grid cells.

```css
justify-items: center;
```

Values:

- start
- center
- end
- stretch

---

# align-items

Aligns items vertically inside their cells.

```css
align-items: center;
```

Values:

- start
- center
- end
- stretch

---

# place-items

Shortcut for:

```css
justify-items
align-items
```

Example:

```css
place-items: center;
```

Centers items both horizontally and vertically.

---

# justify-content

Aligns the entire grid horizontally inside the container.

```css
justify-content: center;
```

Values:

- start
- center
- end
- space-between
- space-around
- space-evenly

---

# align-content

Aligns the entire grid vertically.

```css
align-content: center;
```

Values:

- start
- center
- end
- space-between
- space-around
- space-evenly

---

# place-content

Shortcut for:

```css
justify-content
align-content
```

Example:

```css
place-content: center;
```

---

# minmax()

Defines minimum and maximum size.

```css
grid-template-columns:
minmax(200px, 1fr);
```

Meaning:

```text
Minimum width = 200px
Maximum width = 1fr
```

Useful for responsive layouts.

---

# auto-fit

Automatically fits columns into available space.

```css
grid-template-columns:
repeat(auto-fit, minmax(200px, 1fr));
```

If space is available, columns expand.

---

# auto-fill

Creates as many columns as possible.

```css
grid-template-columns:
repeat(auto-fill, minmax(200px, 1fr));
```

Empty columns may remain visible.

---

# Grid vs Flexbox

## Flexbox

Works in one direction.

```text
→ → → → →
```

Best for:

- Navigation bars
- Cards
- Buttons
- Small layouts

---

## Grid

Works in two directions.

```text
↓ ↓ ↓
→ → →
```

Best for:

- Entire page layouts
- Dashboards
- Galleries
- Complex responsive layouts

---

# Best Practices

✅ Use Grid for page layouts

✅ Use Flexbox for small components

✅ Use gap instead of margins when possible

✅ Use fr units for flexible layouts

✅ Use minmax() for responsive grids

✅ Use auto-fit for responsive card layouts

✅ Keep Grid structure simple and organized

---

# Real World Uses of CSS Grid

CSS Grid is commonly used for:

- Portfolio Websites
- News Websites
- E-commerce Layouts
- Product Galleries
- Dashboards
- Landing Pages
- Admin Panels

---

# Conclusion

CSS Grid is a powerful two-dimensional layout system that allows developers to build responsive and professional layouts using rows and columns.

It provides better control over positioning, alignment, spacing, and responsiveness compared to older layout methods.

Mastering CSS Grid is an important step toward becoming a professional Front-End Developer.