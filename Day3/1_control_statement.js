//If-else statement
let age = 23;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}
//else - if statement
let num = 30;
if (num > 0) {
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

//Exp- check the no is even or odd
let num1 = 13;
if (num1 % 2 == 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

//check the which no is larger

let x = 23;
let y = 45;
if (x < y) {
    console.log("x is smaller than y");
} else if (x > y) {
    console.log("y is larger than x ");
} else {
    console.log(" both are equal");
}

// check the letter is vowel or not
let input = 'd';
if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u' || input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U') //mostly used  //once getting one true it print output not go to comapare to other or execute forword
{
    log
    console.log("It is a vowel");
} else {
    console.log("consonent");
}

//Nested if-else statement
let t = 7;

if (t >= 35) {
    console.log("Temperature is high");
} else if (t >= 20) {
    console.log("Temperature is normal");
} else if (t === 0) {
    console.log("Temperature is low");
} else {
    console.log("Temperature is extremely low");
}

//Give the grade acoording to their numbers(if-elseif-if)
let f = 80;
if (f >= 90 && f <= 100) {
    console.log("grade= A");
} else if (f >= 70 && f <= 89) {
    console.log("grade= B ");
} else if (f >= 60 && f <= 79) {
    console.log("grade= C");
} else if (f >= 33 && f <= 59) {
    console.log("grade= D");
}
if (f <= 32) {
    console.log("You are fail");
}

//using return keyword with function
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A";
    if (score >= 80 && score <= 89) return "B";
    if (score >= 70 && score <= 79) return "C";
    if (score >= 60 && score <= 69) return "D";
    if (score >= 33 && score <= 59) return "E";
    return "fail"
}
console.log(getGrade(32));

//Rock-Paper-Scissors logic
function rps(user, computer) {
    if (user === computer) return "Draw";
    if (user === "rock" && computer === "scissor") return "user win";
    if (user === "scissor" && computer === "paper") return "user win";
    if (user === "paper" && computer === "rock") return "user win";
    return "computer win";

}
let d = rps("paper", "rock");
console.log(d);