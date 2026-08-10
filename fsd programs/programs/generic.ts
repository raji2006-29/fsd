class Box<T> {

    data: T;

    constructor(data: T) {
        this.data = data;
    }

    displayData(): void {
        console.log("Stored Data:", this.data);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("TypeScript");
let booleanBox = new Box<boolean>(true);

numberBox.displayData();
stringBox.displayData();
booleanBox.displayData();