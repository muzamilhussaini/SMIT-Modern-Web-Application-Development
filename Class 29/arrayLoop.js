// // 1.  Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console.

// let fruit = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruit.length; i++) {
//     const element = fruit[i];
//     console.log(element);
// }

// // 2.  Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector.

// let color = ["red", "green", "blue"];
// let p = document.querySelector("#output");

// for (let i = 0; i < color.length; i++) {
//     const element = color[i];
//     p.innerHTML += `${element} <br>`
// }


// // 3.  Use a for loop to print numbers from 1 to 10 in the browser console.
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// // 4.  Use a while loop to print numbers from 5 to 1 in the console.
// let i = 5;

// while (i > 0) {
//     console.log(i);
//     i--;
// }


// // 5.  Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with ID names to show all names separated by commas.
// let names = ["Ali", "Sara", "Ahmed"];
// let div = document.querySelector("#names");

// for (let i = 0; i < names.length; i++) {
//     div.textContent += names[i];
//     // div.textContent += `${element}, `
//     if (i < names.length - 1) {
//         div.textContent += ', '
//     }
// }


// // 6.  Change the text of a paragraph with ID status to "Loading..." using document.querySelector.

// const para = document.querySelector("#status");

// function paragraph() {
//     para.textContent = "Loading..."
// }


// 7.  Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in a paragraph with ID su

let sumArr = [5, 10, 15];
let sum = 0;

for (let i = 0; i < sumArr.length; i++) {
    const element = sumArr[i];
    sum += element 
}
console.log(sum);

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities.
let cities = ["Karachi", "Lahore", "Quetta"];
let city = document.querySelector("#cities");
for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    city.textContent += ` ${element}`
}

// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the largest number in a paragraph with ID max.

let numberArr = [45, 22, 89, 100];
const max = document.querySelector("#max");
let num = numberArr[0];

for (let i = 0; i < numberArr.length; i++) {
    const largest = numberArr[i];
    if (largest > num) {
        num = largest
        max.textContent = num;
    }
}


// 11. Use document.querySelector to select a div with ID result and change its text to "Task Complete".
document.querySelector("#result").textContent = "Task Complete";


// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and display it inside an element with ID averageTemp.
let temperature = [30, 35, 32, 40];
let averageSum = 0;
for (let i = 0; i < temperature.length; i++) {
    let average = temperature[i];
    averageSum += average;
}
const totalAvg = averageSum / temperature.length;

let averageTemp = document.querySelector("#averageTemp");
averageTemp.textContent = totalAvg;

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a paragraph with ID totalSum.

let totalSum = document.querySelector('#totalSum');
let sumNumbers = 0;
for (let i = 1; i < 101; i++) {
    sumNumbers += i;
}

document.querySelector("#totalSum").textContent = sumNumbers;


// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with ID animals.
let animals = document.querySelector('#animals');
let animalArr = ["dog", "cat", "bird"];
for (let i = 0; i < animalArr.length; i++) {
    const element = animalArr[i];
    animals.textContent += ` ${element}`;
}


// 15. Use document.querySelector to select a heading with ID title and change its text to "Welcome to JavaScript!".
document.querySelector('#title').textContent = `Welcome to JavaScript!`;


// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log them to the console.

for (let i = 1; i < 51; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and display the count in a div with ID highScores.

let score = [80, 60, 90, 70];
let countScore = 0;

for (let i = 0; i < score.length; i++) {
    const element = score[i];
    if (element > 70) {
        countScore++
    }
}
document.querySelector("#highScore").textContent = `${countScore} scores are greater than other numbers.`
// console.log(countScore);


// 18. Select an element with ID message and change its text to "Updated successfully" using document.querySelector.
document.querySelector('#message').textContent = "Updated successfully";


// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show them in a paragraph with ID subjectsList.

const subject = ["Math", "Science", "English"];
let paraSub = document.querySelector("#subjectsList");
for (let i = 0; i < subject.length; i++) {
    let printingSubject = subject[i];
    paraSub.textContent += `${printingSubject} `;
}


// 20. Write a loop that prints numbers from 10 down to 1 and shows the result.
// Given an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all elements.
let numbers = [5, 10, 15, 20];
let sumOfTotal = 0;
for (let i = 10; i > 0; i--) {
    console.log(i);
    // console.log(i)
}
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
    sumOfTotal += element
}
// console.log(sumOfTotal);
console.log(`The sum is: ${sumOfTotal}`);


// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

let finLarArr = [45, 67, 12, 89, 34];
let larNum = finLarArr[0];
for (let i = 0; i < finLarArr.length; i++) {
    const element = finLarArr[i];
    if (element > larNum) {
        larNum = element
    }
}
console.log(larNum);
// console.log(finLarArr);


// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.
let countEven = 0;
const numArr = [3, 8, 6, 1, 9, 2];

for (let i = 0; i < numArr.length; i++) {
    const element = numArr[i];
    if (element % 2 === 0) {
        countEven++;
    }
}
console.log(countEven);


// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
let avgArr = [30, 35, 32, 40];
let avgSumArr = 0;
for (let i = 0; i < avgArr.length; i++) {
    let avg = avgArr[i];
    avgSumArr += avg;
}
const avgTotal = avgSumArr / avgArr.length;
console.log(avgTotal);


// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is multiplied by 3.

let givenArr = [2, 4, 6, 8, 10];
let newArr = [];

for (let i = 0; i < givenArr.length; i++) {
    const element = givenArr[i];
    let newElement = element * 3;
    newArr.push(newElement);
}
console.log(givenArr);
console.log(newArr);


// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.

let arrNum = [1, 3, 5, 7, 9];
let numCounter = 0;
for (let i = 0; i < arrNum.length; i++) {
    const element = arrNum[i];
    if (element > 4) {
        numCounter++;
    }
}
console.log(numCounter);


// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
let arrGiven = [10, 15, 20, 25, 30, 8];

for (let i = 0; i < arrGiven.length; i++) {
    let value = arrGiven[i];
    if (value % 5 === 0) {
        console.log(`${value} is divisible by 5`);
    } else {
        console.log(`${value} is not divisible by 5`);
    }
}

// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
let existArr = [10, 20, 30, 40, 25];
let isExist = false;

for (let i = 0; i < existArr.length; i++) {
    const finding25 = existArr[i];
    if (finding25 === 25) {
        isExist = true;
        break;
    }
}
if (isExist) {
    console.log('25 is exit in the array.');
} else {
    console.log("25 does not exist in an array.");
}

// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the sum of corresponding elements.
let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let arrThird = [];

for (let i = 0; i < arrOne.length; i++) {
    const firstElement = arrOne[i]
    const secondElement = arrTwo[i]
    let sumOfArr = firstElement + secondElement;
    arrThird.push(sumOfArr);
}
console.log(arrOne);
console.log(arrTwo);
console.log(arrThird);


// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].

const larNumArr = [10, 99, 23, 87, 56];
let secondLargest = larNumArr[0];

for(let i = 0; i < larNumArr.length; i++) {
    if (larNumArr[i] > secondLargest) {
        secondLargest = larNumArr[i];
    }
}
console.log(secondLargest);


// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use .reverse()).
let resArr = [1, 2, 3, 4, 5];
// let reverse = []
for (let i = resArr.length - 1; i >= 0; i--) {
    
    resArr.push(resArr[i]);
}
resArr.splice(0, 5);
console.log(resArr);

// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.

for(let i = 1; i <= 50; i++) {
    if (i % 1 === 0 && i % i === 0) {
        console.log(i)
    }
}