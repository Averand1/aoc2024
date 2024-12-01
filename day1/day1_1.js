const fs = require("fs");

// Example test array
let testArray = `
    3   4
    4   3
    2   5 
    1   3 
    3   9 
    3   3
`;

// Function to calculate the distance sum
function DistanceSum(data, leftSide, rightSide) {
    // Format the input data to get leftSide and rightSide arrays
    [leftSide, rightSide] = formatData(data);
    // Sort the leftSide and rightSide arrays
    let leftSorted = leftSide.sort((a, b) => (a - b));
    let rightSorted = rightSide.sort((a, b) => (a - b));
    let sum = 0;

    // Calculate the sum of absolute differences
    for (let i = 0, j = 0; i < leftSorted.length && j < rightSorted.length; i++, j++) {
        sum += Math.abs(leftSorted[i] - rightSorted[i]);
    }
    return sum;
}

// Function to format the input data into leftSide and rightSide arrays
function formatData(data, leftSide = [], rightSide = []) {
    let rows = data.trim().split("\n");

    for (const row of rows) {
        // Split each row by spaces and convert to numbers
        let [left, right] = row.trim().split("   ").map(Number);
        leftSide.push(left);
        rightSide.push(right);
    }

    return [leftSide, rightSide];
}

// Read the input file and calculate the distance sum
fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        throw new Error("Error Encountered", err);
    }

    console.log(DistanceSum(data));
    console.log(DistanceSum(testArray));
});
