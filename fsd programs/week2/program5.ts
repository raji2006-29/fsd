function displays(name: string, age?: number): void {
    if (age)
        console.log(name + " " + age);
    else
        console.log(name);
}

displays("Rajya Lakshmi");
displays("Rahul", 21);

function greet(name: string = "Student") {
    console.log("Welcome " + name);
}

greet();
greet("Rekha");

function totals(...marks: number[]) {
    let sum = 0;
    for (let m of marks)
        sum += m;

    console.log("Total =", sum);
}

totals(70, 80, 90);