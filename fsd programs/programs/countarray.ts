let occurrenceArray: number[] = [1, 2, 2, 3, 1, 4, 2];

let occurrenceMap: { [key: number]: number } = {};

for (let arrayElement of occurrenceArray) {
    occurrenceMap[arrayElement] = (occurrenceMap[arrayElement] || 0) + 1;
}

console.log("Occurrences:");

for (let elementKey in occurrenceMap) {
    console.log(elementKey + " -> " + occurrenceMap[elementKey]);
}