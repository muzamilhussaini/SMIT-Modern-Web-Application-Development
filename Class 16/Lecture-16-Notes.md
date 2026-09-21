# 📖 Lecture 16: CSS Media Queries

## Introduction

Modern websites are viewed on many different devices such as mobile phones, tablets, laptops, and desktop computers.

A website should automatically adjust its layout and design according to the screen size. This is called **Responsive Web Design**.

CSS Media Queries help us create responsive websites by applying different styles for different screen sizes.

---

# What is a Media Query?

A Media Query is a CSS feature that allows us to apply styles based on conditions such as screen width, height, or device type.

### Syntax

```css
@media (condition) {
    selector {
        property: value;
    }
}
Example
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
```
When the screen width becomes 768px or smaller, the background color changes.

## Why Use Media Queries?

### Media Queries help us:

- ✅ Create responsive websites
- ✅ Improve user experience
- ✅ Support different devices
- ✅ Make layouts mobile-friendly
- ✅ Adjust fonts, images, and navigation

## Viewport Meta Tag

Before using Media Queries, we should add the viewport meta tag inside the <head> section.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
### Purpose
- Makes websites responsive
- Matches webpage width to device width
- Improves mobile viewing experience

### max-width

max-width applies styles when the screen width becomes smaller than or equal to a specified value.

Example
```css
@media (max-width: 768px) {
    h1 {
        color: red;
    }
}
```

In this example, the h1 color becomes red when the screen width is 768px or smaller.

### min-width

min-width applies styles when the screen width becomes greater than or equal to a specified value.

Example
```css
@media (min-width: 768px) {
    h1 {
        color: blue;
    }
}
```

In this example, the h1 color becomes blue when the screen width is 768px or larger.

## Common Screen Breakpoints

Breakpoints are screen-width values where we change the design of a website.

### Mobile Devices
```css
@media (max-width: 480px)
```

### Tablets
```css
@media (max-width: 768px)
```
### Laptops
```css
@media (max-width: 1024px)
```
### Desktop Screens
```css
@media (min-width: 1200px)
```
These are common example breakpoints. They are not strict device categories. The appropriate breakpoint depends on the layout being designed.

# Mobile First Approach

Mobile First means designing for mobile devices first and then adding styles for larger screens.

Example
```css
.container {
    width: 100%;
}

@media (min-width: 768px) {
    .container {
        width: 80%;
    }
}
```

### Advantages
- Better performance
- Easier responsive design
- Starts with the smallest screen and adds styles for larger screens

# Desktop First Approach

Desktop First means designing for large screens first and then adjusting the design for smaller screens.

Example
```css
.container {
    width: 80%;
}

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
```
# Responsive Text

Media Queries can be used to adjust font sizes for different devices.

Example
```css
h1 {
    font-size: 40px;
}

@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

On larger screens, the heading is 40px.

On screens 768px or smaller, the heading becomes 28px.

# Responsive Images

Images should adapt to different screen sizes.

Example
```css
img {
    width: 100%;
    height: auto;
}
```
### Benefits
- Prevents overflow
- Improves responsiveness
- Maintains image proportions

# Responsive Navigation

Media Queries can also be used to change the navigation layout.

## Desktop Navigation
```css
nav ul {
    display: flex;
}
```
## Mobile Navigation
```css
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }
}
```

On larger screens, the navigation items can appear in a row.

On smaller screens, they can appear in a column.

# Multiple Media Queries

We can use multiple Media Queries for different screen sizes.

Example
```css
@media (max-width: 1200px) {
    body {
        background-color: lightgray;
    }
}

@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}

@media (max-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

Different styles can be applied at different screen widths.

# Media Queries with Flexbox

Media Queries can be combined with Flexbox to create responsive layouts.

Example
```css
.container {
    display: flex;
    gap: 20px;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

The items appear in a row on larger screens and change to a column on smaller screens.

# Media Queries with CSS Grid

Media Queries can also change the number of Grid columns.

Example
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

The layout has three columns on larger screens and one column on smaller screens.

# Benefits of Responsive Design
- Better User Experience
- Mobile Friendly
- Improved Accessibility
- Professional Design
- Better SEO
- Supports Different Screen Sizes
Best Practices
- Always use the viewport meta tag
- Use relative units like %, rem, em, vw, and vh
- Test websites on different screen sizes
- Use Flexbox and Grid with Media Queries
- Avoid unnecessary fixed widths
- Design with responsiveness in mind
- Choose breakpoints based on your layout rather than only on specific devices
## Summary

### Topics Covered:

- ✅ Responsive Web Design
- ✅ CSS Media Queries
- ✅ Viewport Meta Tag
- ✅ max-width
- ✅ min-width
- ✅ Breakpoints
- ✅ Mobile First Approach
- ✅ Desktop First Approach
- ✅ Responsive Text
- ✅ Responsive Images
- ✅ Responsive Navigation
- ✅ Multiple Media Queries
- ✅ Media Queries with Flexbox
- ✅ Media Queries with CSS Grid

# Conclusion

Media Queries are an essential part of modern web development.

They allow websites to adapt their layout and design to different screen sizes and devices, creating responsive and user-friendly experiences.

By combining Media Queries with Flexbox and CSS Grid, developers can build modern websites that work effectively on mobile phones, tablets, laptops, and desktop computers.

🚀 Responsive Design is a key skill for every Front-End Developer.