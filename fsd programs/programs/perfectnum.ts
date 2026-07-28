let n: number = 28;
let s: number = 0;

for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
        s += i;
    }
}

if (s === n) {
    console.log(n + " is a Perfect Number");
} else {
    console.log(n + " is Not a Perfect Number");
}