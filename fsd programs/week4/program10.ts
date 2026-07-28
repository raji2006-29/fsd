namespace Calculator {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function sub(a: number, b: number): number {
        return a - b;
    }
}

console.log("Addition:", Calculator.add(10, 5));
console.log("Subtraction:", Calculator.sub(10, 5));