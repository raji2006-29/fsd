let nums: number = 12345;
let sums: number = 0;

while (nums > 0) {
    sums += nums % 10;
    nums = Math.floor(nums / 10);
}

console.log("Sum of Digits =", sums);