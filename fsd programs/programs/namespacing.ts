namespace MathOperations {

    export function add(firstValue: number, secondValue: number): number {
        return firstValue + secondValue;
    }

    export function subtract(firstValue: number, secondValue: number): number {
        return firstValue - secondValue;
    }

    export function multiply(firstValue: number, secondValue: number): number {
        return firstValue * secondValue;
    }

    export function divide(firstValue: number, secondValue: number): number {
        return firstValue / secondValue;
    }
}

console.log("Addition:", MathOperations.add(20, 10));
console.log("Subtraction:", MathOperations.subtract(20, 10));
console.log("Multiplication:", MathOperations.multiply(20, 10));
console.log("Division:", MathOperations.divide(20, 10));