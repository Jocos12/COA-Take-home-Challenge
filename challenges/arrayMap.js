const readline = require('readline-sync');

function hasSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Ask the user for input
const inputArrayString = readline.question("Enter the array elements separated by commas: ");
const inputArray = inputArrayString.split(",").map(Number);
const target = Number(readline.question("Enter the target sum: "));

// Display the result
console.log(hasSubarrayWithSum(inputArray, target));
