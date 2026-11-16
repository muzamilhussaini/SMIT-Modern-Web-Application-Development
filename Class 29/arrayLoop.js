// 1.  Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console.

let fruit = ["apple", "banana", "cherry"];

for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    console.log(element);
}

// 2.  Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector.

let color = ["red", "green", "blue"];
let p = document.querySelector("#output");

for (let i = 0; i < color.length; i++) {
    const element = color[i];
    p.innerHTML += `${element} <br>`
}


// 3.  Use a for loop to print numbers from 1 to 10 in the browser console.
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 4.  Use a while loop to print numbers from 5 to 1 in the console.
let i = 5;

while (i > 0) {
    console.log(i);
    i--;
}


// 5.  Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with ID names to show all names separated by commas.
let names = ["Ali", "Sara", "Ahmed"];
let div = document.querySelector("#names");

for (let i = 0; i < names.length; i++) {
    div.textContent += names[i];
    // div.textContent += `${element}, `
    if (i < names.length - 1) {
        div.textContent += ', '
    }
}