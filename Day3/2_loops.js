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

//print even no
// let i = 1;
// while (i <= 10) {

//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

//do-while

// let j = 1;
// do {
//     if (j % 5 === 0) {
//         console.log(j);
//     }
//     j++;
// } while (j <= 59)




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
let guessNum = 34;
let userNum = Number(prompt("Enter your no to guess-"))
while (userNum != guessNum) {
    userNum = prompt("You entered erong Number. Guess again! :");
}
console.log("Congrats , You entered the right number")
    ///only show or run into the browser console