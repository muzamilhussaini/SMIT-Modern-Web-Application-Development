// 1. Speed Limit Warning
// Given a speed, print:

// "Too slow" if below 30
// "Safe speed" if between 30 and 60
// "Speeding" if between 61 and 100
// "Dangerously fast" if over 100

console.log("=======================================");
console.log("      1. Speed Limit Warning           ");
console.log("=======================================");

let speedLimit = 45;

if (speedLimit < 30) {
    console.log("Too slow");

} else if (speedLimit >= 30 && speedLimit <= 60) {
    console.log("Safe speed");

} else if (speedLimit > 61 && speedLimit <= 100) {
    console.log("Speeding");

} else {
    console.log("Dangerously fast");

};


// ============================================================================================================================== 


// 2. Library Book Return Fine
// Given number of late days, calculate the fine:

// 0 days: $0
// 1–5 days: $1 per day
// 6–10 days: $2 per day
// 11+ days: $5 per day

console.log("=======================================");
console.log("      2. Library Book Return Fine      ");
console.log("=======================================");

const lateDays = 0;

if (lateDays === 0) {
    console.log("0 days: $0");

} else if (lateDays >= 1 && lateDays < 6){
    console.log("1-5 days: fine $1 per day" + " | Total fine = $" + lateDays * 1);

} else if (lateDays > 5 && lateDays < 11){
    console.log("6-10 days: fine $2 per day" + " | Total fine = $" + lateDays * 2);

} else {
    console.log("11+ days: fine $5 per day" + " | Total fine = $" + lateDays * 5);

};



// ============================================================================================================================== 

// 3. Event Entry Eligibility
// Check if a person (with age and ticket) can enter:

// Must be 18 or older
// Must have a valid ticket

console.log("========================================");
console.log("      3. Event Entry Eligibility        ");
console.log("========================================");

const age = 20;
const validTicket = true;


if (!validTicket) {
    console.log("Sorry, your ticket is not valid.");

} else if (age < 18) {
    console.log("I'm sorry sir, your ticket is valid but you are not old enough to enter this event.");

} else {
    console.log("Welcome, sir. You are eligible for our event.");
}


// ============================================================================================================================== 

// 4. Smartphone Battery Status
// Given battery percentage, print:

// 80–100: "Fully charged"
// 50–79: "Good battery"
// 20–49: "Low battery"
// Below 20: "Charge now!"

console.log("=======================================");
console.log("      4. Smartphone Battery Status     ");
console.log("=======================================");

const batteryPercentage = 85;

if (batteryPercentage >= 80 && batteryPercentage <= 100) {
    console.log("Fully charged");
    
} else if (batteryPercentage >= 50 && batteryPercentage <= 79) {
    console.log("Good battery");
    
} else if (batteryPercentage >= 20 && batteryPercentage <= 49) {
    console.log("Low battery");
    
} else if (batteryPercentage >= 0 && batteryPercentage <= 19) {
    console.log("Charge now!");
    
} else {
    console.log("Invalid input");
    
}



// ============================================================================================================================== 

// 5. Discount Eligibility
// Given customer type and age, apply discount:

// Student: 20%
// Senior (60+): 30%
// Others: 0%

console.log("=======================================");
console.log("      5. Discount Eligibility          ");
console.log("=======================================");

// let type = prompt("Enter customer type");
// let ageCustomer = +prompt("Enter customer age");

// if (type === "student") {
//     console.log("Student discount: 20%");

// } else if (type === "senior" && ageCustomer >= 60) {
//     console.log("The discount for senior is 30%");

// } else if (type === "senior") {
//     console.log("Discount not applied.");
    
// } else {
//     console.log("No discount available for others.");

// }


// ============================================================================================================================== 

// 6. Clothing Recommendation
// Based on temperature (°C), suggest clothing:

// Below 10: "Heavy jacket"
// 10–20: "Sweater"
// 21–30: "T-shirt"
// Above 30: "Light clothes"

console.log("=======================================");
console.log("      6. Clothing Recommendation       ");
console.log("=======================================");

let temperature = 2;

if (temperature > 30) {
    console.log("           Light clothes              ");
    
} else if (temperature >= 21 && temperature <= 30) {
    console.log("             T-Shirt                  ");
    
} else if (temperature >= 10 && temperature <= 20) {
    console.log("             Sweater                  ");
    
} else {
    console.log("            Heavy jacket               ");
    
}



// ============================================================================================================================== 


console.log("=======================================");
console.log("      7. Water Intake Reminder         ");
console.log("=======================================");

// Based on activity level, suggest water intake:

// Sedentary: 2L
// Moderate: 2.5L
// Active: 3L+

const activityLevel = "Moderate";

if (activityLevel === "Sedentary") {
    console.log("Sedentary: 2L");
    
} else if (activityLevel === "Moderate"){
    console.log("Moderate: 2.5L");
    
} else if (activityLevel === "Active") {
    console.log("Active: 3L+");
    
} else {
    console.log("Unknown activity Level");
    
}


// ============================================================================================================================== 

console.log("=======================================");
console.log("      8. Exam Result Evaluation        ");
console.log("=======================================");

// Given three subject marks, print:

// "Pass" if all marks are 40 or above
// "Fail" if any mark is below 40

const math = 51;
const science = 45;
const physics = 88;

if (math >= 40 && science >= 40 && physics >= 40) {
    console.log("Pass");
    
} else {
    console.log("Fail");
    
}


// ============================================================================================================================== 

console.log("=======================================");
console.log("      9. App Theme Selection           ");
console.log("=======================================");

// 9. App Theme Selection
// Based on time of day (0–23), select theme:

// 6–17: Light Mode
// Otherwise: Dark Mode

let timeOfDay = 15;

if (timeOfDay < 0 || timeOfDay > 23) {
    console.log("Invalid Time!");
    
} else if (timeOfDay >= 6 && timeOfDay <= 17) {
    console.log("Light Mode");
    
} else {
    console.log("Dark Mode");

}

// ==============================================================================================================================

console.log("=======================================");
console.log("     10. Meal Type Identifier          ");
console.log("=======================================");

// 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:

// 6–10: Breakfast
// 12–14: Lunch
// 18–21: Dinner
// Any other time: Snack


let identifyMealTime = 4;

if (identifyMealTime < 0 || identifyMealTime > 23) {
    console.log("Invalid Time!");
    
} else if (identifyMealTime >= 6 && identifyMealTime <= 10) {
    console.log("Breakfast Time!");
    
} else if (identifyMealTime >= 12 && identifyMealTime <= 14) {
    console.log("Lunch Time!");
    
} else if (identifyMealTime >= 18 && identifyMealTime <= 21) {
    console.log("Dinner Time!");
    
} else {
    console.log("Snack Time!");
    
}