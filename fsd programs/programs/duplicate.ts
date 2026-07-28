let inputString: string = "programming";
let uniqueCharacters: string = "";

for (let character of inputString) {
    if (!uniqueCharacters.includes(character)) {
        uniqueCharacters += character;
    }
}

console.log("Original String:", inputString);
console.log("After Removing Duplicates:", uniqueCharacters);