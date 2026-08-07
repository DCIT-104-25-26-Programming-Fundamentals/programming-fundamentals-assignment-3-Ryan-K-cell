// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// =============================================================================

const readlineSync = require("readline-sync");

// Function to read a matrix from the user
function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        let values = row.split(" ").map(Number);

        if (values.length !== cols) {
            console.log("Error: Incorrect number of values entered.");
            return null;
        }

        matrix.push(values);
    }

    return matrix;
}

// Function to display a matrix neatly
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }

        console.log(row);
    }
}

// Part A: Function to transpose a matrix
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let i = 0; i < cols; i++) {
        let newRow = [];

        for (let j = 0; j < rows; j++) {
            newRow.push(matrix[j][i]);
        }

        transpose.push(newRow);
    }

    return transpose;
}

// Part B: Function to add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        let row = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

// Part C: Function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        let row = [];

        for (let j = 0; j < colsB; j++) {
            let sum = 0;

            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// Main function
function main() {

    // ---------------- PART A ----------------
    console.log("PART A — Matrix Transpose");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    if (matrix === null) {
        return;
    }

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrix));


    // ---------------- PART B ----------------
    console.log("\nPART B — Matrix Addition");

    console.log("Enter Matrix A:");
    let matrixA = readMatrix(rows, cols);

    console.log("Enter Matrix B:");
    let matrixB = readMatrix(rows, cols);

    console.log("\nMatrix Addition Result:");
    displayMatrix(addMatrices(matrixA, matrixB));


    // ---------------- PART C ----------------
    console.log("\nPART C — Matrix Multiplication");

    let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    console.log("Enter Matrix A:");
    let multiplyA = readMatrix(rowsA, colsA);


    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
    let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Error: Columns of Matrix A must equal rows of Matrix B.");
        return;
    }

    console.log("Enter Matrix B:");
    let multiplyB = readMatrix(rowsB, colsB);


    console.log("\nMatrix Multiplication Result:");
    displayMatrix(multiplyMatrices(multiplyA, multiplyB));
}

// Run program
main();
