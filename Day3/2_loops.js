// for loop
// for (let i = 1; i <= 4; i++) {
//     console.log("Hello");
// }

//sum of 10 numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
//     console.log(sum);
// }


//print odd numbers
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }

// while loop
// let i = 1;
// while (i <= 10) {
//     console.log("Hello");
//     i++;

// }

let p = 1;
while (p <= 10) {
    console.log(p);
    p++
}

//print even no
// let t = 1;
// while (t <= 10) {

//     if (t % 2 === 0) {
//         console.log(i);
//     }
//     t++;
// }

//sum of numbers

let i = 1;
let sum = 0;
while (i <= 6) {
    sum = sum + i;
    console.log(sum);
    i++;
}


//do-while

// let j = 1;
// do {
//     if (j % 5 === 0) {
//         console.log(j);
//     }
//     j++;
// } while (j <= 59) // at least once execute


// let choice;
// do {
//     console.log("1.  Check Even or Odd");
//     console.log("2.  Exit");
//     choice = parseInt(prompt("Enter your choice"));
//     if (choice === 1) {
//         let num = parseInt(prompt("Enter a Number:"));

//         if (num % 2 === 0) {
//             console.log(num + "is Even");
//         } else {
//             console.log(num + "is Odd");
//         }
//     }
// }
// while (choice !== 2);




// for-of loop
// let str = "Hey! My name is Alexa";
// for (let i of str) {
//     console.log("i=", i);
//     i++;
// }

/// calculate length of strings
// let str = "Hey! My name is Alexa";
// let length = 0;
// for (let i of str) {
//     console.log("i=", i);
//     length++;
// }
// console.log(length);


//for-in loop used for object and array

// let student = {
//     name: "Micky ",
//     class: 5,
//     age: 12,
//     rollNo: 1,
//     isPass: "true",
// };
// for (let key in student) {
//     console.log(student[key]);
// }


// guess the correct number(user input)
// let guessNum = 34;
// let userNum = Number(prompt("Enter your no to guess-"))
// while (userNum != guessNum) {
//     userNum = prompt("You entered erong Number. Guess again! :");
// }
// console.log("Congrats , You entered the right number")
///only show or run into the browser console

//Switch cases
// let choice;
// do {
//     console.log("1.Addition");
//     console.log("2.Subtraction");
//     console.log("3.Multiplication");
//     console.log("4.Modulo");
//     console.log("5.Exit");
//     choice = parseInt(prompt('Enter your choice'))
//     if (choice >= 1 && choice <= 4) {
//         let a = parseInt(prompt("Enter your first number:"));
//         let b = parseInt(prompt("Enter your second number:"));

//     }
// }