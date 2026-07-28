interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(arg: T): void {
    console.log("Length:", arg.length);
}

printLength("Hello");
printLength([10, 20, 30, 40]);