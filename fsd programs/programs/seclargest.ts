let numberArray: number[] = [10, 45, 78, 23, 99, 56];

let largestValue = -Infinity;
let secondLargestValue = -Infinity;

for (let currentNumber of numberArray) {
    if (currentNumber > largestValue) {
        secondLargestValue = largestValue;
        largestValue = currentNumber;
    } else if (currentNumber > secondLargestValue && currentNumber !== largestValue) {
        secondLargestValue = currentNumber;
    }
}

console.log("Second Largest Number:", secondLargestValue);