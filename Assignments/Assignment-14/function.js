// 💻 JavaScript Function Assignment  


// 1.  addTwoNumbers 
//  Write a function that takes two numbers and returns their sum.

function addTwoNumbers (num1, num2) {
    return num1 + num2;
}
let addNumbers = addTwoNumbers(13, 24);
console.log(addNumbers);


// 2.  subtractNumbers 
//  Create a function that takes two numbers and returns the result of the first number minus the second

function subtractNumbers (num1, num2) {
    return num1 - num2;
}
let subtractTwoNumbers = subtractNumbers(13, 24);
console.log(subtractTwoNumbers);


// 3.  multiplyNumbers 
//  Write a function that multiplies two numbers and returns the result.

function multiplyTwoNumbers (num1, num2) {
    return num1 * num2;
}
let multiplyNumbers = multiplyTwoNumbers(5, 5);
console.log(multiplyNumbers);


// 4.  divideNumbers 
//  Create a function that takes two numbers and returns the result of dividing the first by the second
function divideTwoNumbers (num1, num2) {
    return num1 / num2;
}
let divideNumbers = divideTwoNumbers(5, 10);
console.log(divideNumbers);


// 5.  getRemainder 
//  Write a function that takes two numbers and returns the remainder when the first number is divided by the second.

function getRemainder(num1, num2) {
    return num1 % num2;
}

let modulusTwoNumbers = getRemainder(10, 5);
console.log(modulusTwoNumbers);



// 6.  isPositive 
//  Write a function that checks if a number is positive. If it is, return "Positive", otherwise return "Not Positive".

function isPositive (number) {
    if (number > 0) {
        return "Positive";
    } else {
        return "Not Positive";
    }
}

let positiveChecker = isPositive(-43);
console.log(positiveChecker);


// 7.  isNegative 
//  Create a function that checks if a number is negative. If it is, return "Negative", else return "Not Negative".

function isNegative (number) {
    if (number < 0) {
        return "Negative";
    } else {
        return "Not Negative";
    }
}

let negativeChecker = isNegative(23);
console.log(negativeChecker);


// 8.  checkEven 
//  Write a function that takes a number and returns "Even" if the number is even, otherwise "Odd".

function checkEven (number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let evenNumberChecker = checkEven(13);
console.log(evenNumberChecker);


// 9.  isEqual 
//  Write a function that takes two numbers and returns "Equal" if they are the same, otherwise "Not Equal".

function isEqual (num1, num2) {
    if (num1 === num2) {
        return "Equal";
    } else {
        return "Not Equal";
    }
}

let equalNumbersChecker = isEqual(17, 15);
console.log(equalNumbersChecker);


// 10. compareNumbers 
//  Create a function that returns "Greater" if the first number is greater than the second, else return "Smaller".

function compareNumbers (num1, num2) {
    if (num1 > num2) {
        return "Greater";
    } else {
        return "Smaller";
    }
}

let compareTwoNumbers = compareNumbers(11, 15);
console.log(compareTwoNumbers);


// 11. getFullName 
//  Write a function that takes a first name and last name, and returns the full name.

function getFullName (firstName, lastName) {
    let fullName = firstName + " " + lastName
    return fullName;
}

let userName = getFullName("Muzamil", "Hussain");
console.log(userName);


// 12. getGrade 
//  Create a function that takes a number (0–100) and returns:  
// ●  "Pass" if the score is 40 or more  
// ●  "Fail" if it is less than 40

function getGrade (marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid Numbers";
    } else if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let gradeChecker = getGrade(100);
console.log(gradeChecker);


// 13. isTeenager 
//  Write a function that takes an age and returns "Teenager" if the age is between 13 and 19, otherwise return "Not a Teenager".

function isTeenager(age) {
    if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Not a Teenager";
    }
}

let teenagerChecker = isTeenager(14);
console.log(teenagerChecker);


// 14. greetUser 
//  Write a function that takes a name and returns a greeting like "Hello, Ahmed!".

function greetUser(userName) {
    return "Hello, " + userName + "!"
}
console.log(greetUser("Muzamil"));



// 15. isEligibleToVote 
//  Create a function that takes age and returns "Eligible" if age is 18 or above, otherwise "Not Eligible".

function isEligibleToVote(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    } 
}

let vote = isEligibleToVote(-44);
console.log(vote);


// 16. findAbsoluteValue 
//  Write a function that returns the absolute value of a number (no Math.abs, use if-else only).

function findAbsoluteValue(absoluteValue) {
    if (absoluteValue < 0) {
        return "Absolute value of " + absoluteValue + " is " + absoluteValue * -1;
    } else {
        return "Absolute value " + absoluteValue + " is " + absoluteValue;
    }
}

let gotAbsoluteValue = findAbsoluteValue(-10);
console.log(gotAbsoluteValue);



// 17. checkTemperature 
//  Write a function that takes a temperature and returns:  
// ●  "Hot" if temperature is above 30  
// ●  "Cold" if below 10  
// ●  "Normal" otherwise

function checkTemperature(temperature) {
    if (temperature > 30) {
        return "Hot";
    } else if (temperature < 10) {
        return "Cold";
    } else {
        return "Normal";
    }
}

let seeTemperature = checkTemperature(20);
console.log(seeTemperature); 



// 18. getTriangleType 
//  Create a function that takes 3 sides and returns:  
// ●  "Equilateral" if all are equal  
// ●  "Isosceles" if any two are equal  
// ●  "Scalene" if all are different 

function getTriangleType(firstSide, secondSide, thirdSide) {
    if (firstSide <= 0 || secondSide <= 0 || thirdSide <= 0) {
        return "Invalid Input!";
    } else if (firstSide === secondSide && secondSide === thirdSide && firstSide === thirdSide) {
        return "Equilateral";
    } else if (firstSide === secondSide || secondSide === thirdSide || firstSide === thirdSide) {
        return "Isosceles"
    } else {
        return "Scalene";
    }
}

console.log(getTriangleType(40,3,5));


// 19. calculateDiscountedPrice 
//  Write a function that takes a price and discount percentage, and returns the discounted price.

function calculateDiscountedPrice(price, discount) {
    let discountedAmount = price * (discount / 100);
    let finalPrice = price - discountedAmount
    return finalPrice;
    
    // if (price >= 3000) {
    //     // if it is greater than 3,000 thousands, so we will get them the 30% discount. Else if less than 3,000 so 15%
    //     let discountRate = 30;
    //     let finalPrice = price * ((100 - discountRate) / 100);
    //     return finalPrice
    // } else {
    //     let discountRate = 15;
    //     let finalPrice = price * ((100 - discountRate) / 100);
    //     return finalPrice
    // }
}

console.log(calculateDiscountedPrice(5000 , 30));
console.log(calculateDiscountedPrice(1000 , 15));
console.log(calculateDiscountedPrice(2000 , 20));



// 20. isPasswordValid 
//  Write a function that takes a password and checks if its length is 8 characters or more.  Return "Valid Password" or "Too Short".

function isPasswordValid(password) {
    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return "Too Short";
    }
}

console.log(isPasswordValid("JavaScript123"));