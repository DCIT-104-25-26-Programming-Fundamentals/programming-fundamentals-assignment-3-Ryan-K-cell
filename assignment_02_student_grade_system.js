// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
//
// =============================================================================

const readlineSync = require("readline-sync");

// Function to determine the student's grade
function getGrade(score) {
    // Validate score range
    if (score < 0 || score > 100) {
        return null;
    }

    // Determine grade using if / else if / else
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// Main function
function main() {
    // Read student score
    const score = readlineSync.questionInt("Enter student score (0-100): ");

    // Call getGrade() and display result
    const grade = getGrade(score);

    if (grade === null) {
        console.log("Error: Score must be between 0 and 100.");
    } else {
        console.log(`Grade: ${grade}`);
    }
}

// Run the program
main();
