let rotateArray: number[] = [1, 2, 3, 4, 5];
let rotateBy: number = 2;

let rotatedResult = [
    ...rotateArray.slice(rotateBy),
    ...rotateArray.slice(0, rotateBy)
];

console.log("Rotated Array:", rotatedResult);