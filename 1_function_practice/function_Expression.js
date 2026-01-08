//grreting Happy birthday
const greet = function() {
    console.log('Happy Birthday Anshu....')
}
greet();

//isEven
const isEven = function(num) {
    return num % 2 === 0;
}
console.log(isEven(7));

//return inedex of character;
const indexOfChar = function(string, target) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === target) {
            return i;
        }
    }
    return -1;
}
let str = "Merath";
let ans = indexOfChar(str, "t");
console.log(ans);