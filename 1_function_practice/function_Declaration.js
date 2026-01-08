//is Even
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(9));

//or Inshort
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(6));


//function takes input:string
//output: first character
function anyString(string) {
    return string[0];
}
console.log(anyString("Aditya"));



//fucntion input:array,target
// output: index of (target) if target is there

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArray = [1, 4, 6, 7, 9, 5];
const ans = findTarget(myArray, 9)
console.log("your target is presented at index:", ans)