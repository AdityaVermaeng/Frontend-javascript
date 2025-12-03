//count digit in a number
let count = 0;

function countDigit(num) {
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    console.log(count);

}
countDigit(35678)

//Reverse a number
let rev = 0;

function reverseNum(a) {
    while (a > 0) {
        let digit = a % 10;
        rev = rev * 10 + digit;
        a = Math.floor(a / 10);
    }
    console.log(rev);
}
reverseNum(12345)

// sum of digit
let sum = 0;

function digitSum(num1) {
    while (num1 > 0) {
        let remender = num1 % 10;
        sum = remender + sum;
        num1 = Math.floor(num1 / 10);
    }
    console.log(sum);
}
digitSum(23456)