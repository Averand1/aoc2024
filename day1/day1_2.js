const fs = require('fs');

// Function to multiply and sum values based on data
function MultiplySum(data) {
    let [leftSide, rightSide] = format(data);
    const leftSorted = leftSide.sort((a, b) => a - b);
    const rightSorted = rightSide.sort((a, b) => a - b);
    let result = 0;

    let hashMap = {};
    // Create a hashmap from the rightSorted array
    for (let num of rightSorted) {
        hashMap[num] = (hashMap[num] || 0) + 1;
    }
    // Calculate the result based on the leftSorted array and hashmap values
    for (let num of leftSorted) {
        result += num * (hashMap[num] || 0);
    }

    return result;
}

// Test array data
let testArray = `
    3   4
    4   3
    2   5 
    1   3 
    3   9 
    3   3
`;

// Function to format the input data into leftSide and rightSide arrays
function format(testArray, leftSide = [], rightSide = []) {
    let rows = testArray.trim().split("\n");

    for (const row of rows) {
        // Split each row by spaces and convert to numbers
        let [left, right] = row.trim().split('   ').map(Number);
        leftSide.push(left);
        rightSide.push(right);
    }

    return [leftSide, rightSide];
}

// Read the input file and calculate the multiply sum
fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        throw new Error("Error encountered", err);
    }

    // Calculate and log the results for both input data and test array
    console.log(MultiplySum(data));
    console.log(MultiplySum(testArray));
});
