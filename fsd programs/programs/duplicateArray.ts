let duplicateArray: number[] = [1, 2, 3, 4, 2, 5, 3, 6];

let duplicateMap: { [key: number]: number } = {};

for (let currentElement of duplicateArray) {
    duplicateMap[currentElement] = (duplicateMap[currentElement] || 0) + 1;
}

console.log("Duplicate Elements:");

for (let duplicateKey in duplicateMap) {
    if (duplicateMap[duplicateKey] > 1) {
        console.log(duplicateKey);
    }
}