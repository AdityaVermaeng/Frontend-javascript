//Arrow function

const isEven = num => {
    return num % 2 === 0;
}
console.log(isEven(4)); //true

//string
const firstString = str => {
    return str[0];
}
firstString("anshu");



//target from array

const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
let myArr = [2, 4, 6, 5, 8, 7, 9];
let result = findTarget(myArr, 6);
console.log(result)