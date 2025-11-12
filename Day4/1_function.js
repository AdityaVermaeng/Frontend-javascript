//Function-it is a block of code that is use to performthe task,can be invoked whenever needed

function myFunction() {
    console.log("Hello guys");
    console.log("Welcome to Function");
}
myFunction();

// function sum(x, y) //parameters
// {
// console.log(x + y);
// } //function definition with default parameter
// sum(p1, p2)//function call
// sum(4, 5) //output-9

//rest parameter
function num(a, b, c, ...val) {
    console.log(a, b, c, val);
}
num(1, 4, 6, 7, 8, 9, 4, 2); //provide an array

//function with return keyword 

// function numSum(a, b) {
// return a + b;
// console.log(a + b);
// }
// let num1 = numSum(5, 9); //we can not store that value in a variable because function is not returning any value 
//when we donot use return then function only ferform the task and end not send any value to outside
// console.log(num1); //show undefined
//function expression
let hello = function(name) {

    // console.log("Hello js");
    console.log(name); //Aditya
    return name;
    // console.log(name);//not executed
}
let hel = hello("Aditya")
console.log(hel);


// function numSum(a, b) {
//     return a + b; //return the value 
// after the return no code will be executed
// }
// let num1 = numSum(5, 9); //we camn use this value further in various situations(maths,conditions)
// console.log(num1); //14

//Arrow function
//it is a compact way to writting a function 

// const functionName = (p1, p2) => {
//     //do some work
// }

//creating a function for sum of two num
// function Sum(x, y) {
//     return x + y;
// }
// const arrowSum = (x, y) => {
//     console.log(x + y);
// }
// arrowSum(3, 5)

//creating an arrow funtion for multiplication of two numbers

// function functionMul(t, u) {
//     return t * u;
// }
// const arrowMul = (t, u) => {
//     console.log(t * u);
// }
// arrowMul(9, 8)

// practice question:- return number of vowels in a string

// function countVowel(str) {
//     let count = 0;
//     for (const char of str) {
// if (char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "") {
//             count++;
//         }
//     }
//     return count;
// }
// let val = countVowel("abcdefghi");
// console.log(val);

//greatest of two number
// function num5(p, q) {
//     if (p < q) {
//         console.log("p is smaller");
//     } else if{
//         console.log("q is greater");
//     }
// else {
//     console.log("both are equal");
// }
// }
// num5(7, 9)

//check word is vowel or consonant
// function checkStr(val) {
//     let char = val;
//     if (char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u") {
//         console.log("vowel");
//     } else {
//         console.log("consonant");
//     }
// }
// checkStr("p")

//forEach loop in Function
// Array.forEach(callBackFunction) //passed as an argument for another function
// Array.forEach((val) => {
//     console.log(val);
// })
// let num = [1, 2, 4, 5, 6, 7, 8]
// num.forEach(function printVal(val, idx, num) 
// num.forEach((val, idx, num) => {
// console.log(val, idx, num);
// console.log(val.toUpperCase(), idx, num); if string
// })

//Q2-for a given array of num print square of each using the forEach loop
// let nums = [3, 5, 7, 9];
// nums.forEach((num) => {
//     console.log(num * num);

// })
// let squre = nums.forEach((num) => {
//     console.log(num * num);
// })

//Map-createa new array with the result of some operation. the value its callback returns are used to form new array
// arr.map(callbackfnx(value,index,array))

// let newArr = arr.map((val) => {
//     return val * 2;
// })

// let nums = [67, 65, 89, 76, 45, 34, 15, 32, 63];
// nums.map((val) => {
//     console.log(val);
// });
// let newArr = nums.map((val) => {
// return val;
//     return val * val;
// });
// console.log(newArr);


//filter method-creates a new array of elements that give  ture for a condition
let nums = [67, 65, 89, 76, 45, 34, 15, 32, 63];
let newArr = nums.filter((val) => {
    return val > 50;
})
console.log(newArr);


//practice Questions
//Q1- we are given array of marks od student . filter out of the marks of student that scored 90.
let marks = [67, 93, 64, 99, 86];
let newMarks = marks.filter((val) => {
    return val > 90;
});
console.log(newMarks);


//Important
// function child() {
//     console.log("child is called");
// }

// function parent(a) {
// console.log(a); //we just call  the function we get as the child function structure cause of console
// a(); // in this case we just get the output cause of being child execute 
// }
// parent(child) //a fumction which is pass as an aurgument within a function is known as callback function 
//the function which takes that callback function is known as highorder function

//2nd type
// function parent() {
//     a()
// }
// parent(function child() {
//     console.log("child is called");
// })

//3rd type
// function parent() {
//     a()
// }
// parent(() => {
//     console.log("child is called");
// })

//return used
// function parent() {
//     let hii = a();
//     console.log(hii);//hiii child print 
// }
// parent(() => {
// return "hii child"; this parent only perform the manupulation but not return anything(for Each)cause of unavailability of return keyword
//}

// function parent() {
//     let hii = a();
// console.log(hii);//  basiclally used in map it return some value or new array cause it consist return keyword in the parent function
//     return hii;
// }
// let finalResult = parent(() => {
//     return "hii child";
// })
// console.log(finalResult)

// 
// function parent() {
//     let hii = a("neha");
// console.log(hii);//manupulation  // foreach()
// return hii; // this means parent also return something (finaly return neha )
// }
// finalResult = parent((name) => {
// return "hii child";
//     return name;
// })
// console.log(finalReturn); //parent return neha //by return map method


// let multiply = (a, b) => {
//     return a * b;
// }
// let ans = multiply(9, 8);
// console.log(ans);

function checkAge(val) {
    if (val < 18) return "Not Allowed";
    return "Allowed";
}
let num0 = checkAge(23);
console.log(num0);