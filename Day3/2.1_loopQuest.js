//print 1 to 100 numbers
let n = 100;
for (let i = 1; i <= n; i++) {
    console.log(i);
}

//print even numbers from 1 to 50
const num = 50;
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log("Even numbers are:", i);
    }
}

//print table of any number

function table(num1) {
    for (let i = 1; i <= 10; i++) {
        result = num1 * i;
        console.log(`${num1}x ${i}=${result}`)
    }
}
table(9)

//print revers number from 10 to 1
const num2 = 10
for (let i = num2; i >= 1; i--) {
    console.log();
}