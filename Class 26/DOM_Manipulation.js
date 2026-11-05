//                                  🧠 JavaScript DOM Manipulation Assignment


// 1.  Select a paragraph with id "message" and change its text to "Welcome!". 

let para = document.querySelector("#message");

para.innerHTML = "Welcome!"

// function getPara() {
//     para.innerHTML = "Welcome!"
// }


// 2.  Get the value from an input with id "nameInput" and display it inside a div with id "result
let inp = document.querySelector("#nameInput");
let div = document.querySelector("#result");

function getInput() {
    // inp.value
    div.innerHTML = inp.value;
}



// 3.  When a button is clicked, change the background color of a section with id "container" to light blue.

let section = document.querySelector("#container");
function btnClick() {
    section.style.backgroundColor = "lightblue";
}


// 4.  Select a heading (h1) with id "mainTitle" and change its color to red. 

let h1 = document.querySelector('#mainTitle');
h1.style.color = "red";



// 5.  Get the number from an input with id "num1" and show it inside a paragraph with id "output".

let num1 = document.querySelector('#num1');
let output = document.querySelector('#output');

function numberOutput() {
    output.innerHTML = num1.value
}


// 6.  Select a button with class "submit-btn" and log "Button Clicked" to the console when it's clicked.

let btn = document.querySelector('.submit-btn');

function checkingOutput() {
    console.log("Button Clicked");
}


// 7.  Get values from two inputs with ids "first" and "second", add them (as numbers), and show the result in a span with id "sum" 


function sumTwoNumbers() {
    let first = document.querySelector("#first");
    let second = document.querySelector("#second");
    let span = document.querySelector("#sum");
    const sum = Number(first.value) + Number(second.value);

    span.innerHTML = "The sum of two number are " + sum
}

// 8.  Change the text of a paragraph with class "description" to "Updated successfully".

function changedPara() {
    let para = document.querySelector(".description");

    para.innerHTML = "Updated successfully";
}


// 9.  Select a div with id "box" and set its width to 200px and background color to green. 

function changingDiv() {
    let div = document.querySelector('#box');

    div.style.backgroundColor = "green";
    div.style.width = "200px";
}


// 10. Get the email entered in an input with id "email" and print it in the console.


function emailName() {
    let email = document.querySelector('#email');
    console.log(email.value);
}


// 11. Select a paragraph and update its font size to 24px. 
let paragraph = document.querySelector(".paragraph");

paragraph.style.fontSize = "24px";

// 12. On button click, get a name from input "fullName" and set the text "Hello, [name]" inside a div "greeting".

let fullName = document.querySelector("#fullName");
let greeting = document.querySelector("#greeting");

function userName() {
    greeting.innerHTML = "Hello, " + fullName.value;
}


// 13. Select an image with id "profilePic" and change its src to another image URL.

let profilePic = document.querySelector("#profilePic");
profilePic.src = "clay-banks-CtmO3PZaxmU-unsplash.jpg";


// 14. Change the text color of all elements with class "highlight" to orange.(Hint: You’ll need querySelectorAll for multiple)

let highlight = document.querySelectorAll(".highlight");

// highlight.style.color = "blue";

// Iteration    || =>	Supports .forEach() out of the box    || =>	   Requires Array.from() to use array methods

highlight.forEach(elements => {
    elements.style.color = "orange";
});


// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display "Agreed" or "Not Agreed" in a paragraph.
let checkbox = document.querySelector("#agree");
let checkedAgreeOrNot = document.querySelector("#checkedAgreeOrNot");
console.dir(checkbox); // to see the properties of an input 
// console.log(checkbox.checked) // true if checked otherwise false it not checked

function isChecked() {
    if (checkbox.checked) {
        checkedAgreeOrNot.innerHTML = "Agreed";
    } else {
        checkedAgreeOrNot.innerHTML = "Not Agreed";
    }
}


// 16. Get the selected value from a dropdown (select element) with id "options" and display it in "selectedValue" span.

let select = document.querySelector("#options");
let spanSelect = document.querySelector("#spanSelect");


function valueSelected() {
    spanSelect.innerHTML = "selectedValue " + select.value;
}

// 17. When a button is clicked, show the current date and time inside a paragraph with id "dateTime".
let dateTime = document.querySelector('#dateTime');
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

function timeShowing() {

    dateTime.innerHTML = date + " " + time;
}


// 18. Select a paragraph with id "togglePara" and hide it (set display: none).


function toggle() {
    let togglePara = document.querySelector('#togglePara');
    if (togglePara.style.display === "block" || togglePara.style.display === "") {
        togglePara.style.display = "none";
    } else if (togglePara.style.display === "none" || togglePara.style.display === "") {
        togglePara.style.display = "block";
    }
}


// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18, else "Not Eligible" in a span.
const age = document.querySelector('#age');
const eligible = document.querySelector('#eligible');

function eligibleChecker() {
    if (age.value >= 18) {
        eligible.innerHTML = "Eligible";
    } else {
        eligible.innerHTML = "Not Eligible";
    }
}

// 20. When a button is clicked, clear the value of an input with id "searchBox". 

let searchBox = document.querySelector('#searchBox');

function clearValue() {
    searchBox.value = "";
}