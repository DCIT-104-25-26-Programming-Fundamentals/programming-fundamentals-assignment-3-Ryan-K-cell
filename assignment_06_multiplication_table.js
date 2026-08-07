// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// =============================================================================

const readlineSync = require("readline-sync");

// Part A: Function to generate a single multiplication table
function generateTable(number) {

    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

// Part B: Function to generate multiplication tables from 1 to N
function generateTablesUpTo(n) {

    for (let number = 1; number <= n; number++) {

        console.log(`\nMultiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        console.log("---------------------------");
    }
}

// Main function
function main() {

    // Part A
    const number = readlineSync.questionInt("Enter a number for multiplication table: ");

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    generateTable(number);


    // Part B
    const n = readlineSync.questionInt("\nEnter N for tables from 1 to N: ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    generateTablesUpTo(n);
}

// Run program
main();
