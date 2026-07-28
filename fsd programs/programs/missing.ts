let valuesArray: number[] = [1, 2, 3, 5, 6];

let totalElements = valuesArray.length + 1;

let expectedTotal = (totalElements * (totalElements + 1)) / 2;

let actualTotal = 0;

for (let arrayValue of valuesArray) {
    actualTotal += arrayValue;
}

let missingValue = expectedTotal - actualTotal;

console.log("Missing Number:", missingValue);