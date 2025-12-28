let prompt = require('prompt-sync')();
let a = prompt("Enter a number:");
// console.log(a);//it can be used in window console as well as on terminal
process.stdout.write(a);