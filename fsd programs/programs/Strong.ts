let nu: number = 145;
let origina: number = nu;
let su: number = 0;

while (nu > 0) {
    let digit = nu % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    su += fact;
    nu = Math.floor(nu / 10);
}

if (su === origina) {
    console.log(origina + " is a Strong Number");
} else {
    console.log(origina + " is Not a Strong Number");
}