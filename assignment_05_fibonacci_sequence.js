// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// =============================================================================

const readlineSync = require("readline-sync");

// Part A: Function to print first N Fibonacci terms
function generateFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let fibonacci = [];
    let first = 0;
    let second = 1;

    for (let i = 0; i < n; i++) {
        fibonacci.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence: " + fibonacci.join(" "));
}

// Part B: Function to check if a number is a Fibonacci number
function isFibonacci(number) {
    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// Main function
function main() {

    // Part A
    const terms = readlineSync.questionInt("How many terms? ");
    generateFibonacci(terms);


    // Part B
    const number = readlineSync.questionInt("\nEnter a number to check: ");

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

// Run program
main();
