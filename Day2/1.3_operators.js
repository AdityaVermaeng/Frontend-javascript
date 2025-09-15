//Logical operator
let a = 5
let b = 9
console.log(a < b && b == 9); //AND  //when it get false while checking 1st operation then it automatically gave the false sign withiout checking others
console.log(a < b || b == 9); //OR////when it get true while checking 1st operation then it automatically gave the true sign withiout checking others



//Ternary Operator
let age = 34;
let result = age > 18 ? "adult" : "not Adult";
console.log(result);

//eligibal for vote or not

let x = 10;
let y = 30;
let result1 = x > 18 ? "eligible for vote " : "not eligible for vote";
let result2 = y > 18 ? "eligible for vote " : "not eligible for vote";
console.log(result1);
console.log(result2);