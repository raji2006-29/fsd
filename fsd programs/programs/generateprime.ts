let start: number = 1;
let end: number = 50;

console.log(`Prime numbers between ${start} and ${end}:`);

for (let num = start; num <= end; num++) {
    let prime = true;

    if (num < 2) {
        prime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
    }

    if (prime) {
        console.log(num);
    }
}