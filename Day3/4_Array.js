// creating an array
// let data = [10, 39, 47, 89]
// let data = new Array(23, 34, 45, 67, 89, 90); //constructor method
// console.log(data);

// assign value through the length
// let data = new Array(3)
// data[0] = 5;
// data[1] = 8;
// data[2] = 3;
// console.log(data);


// creating an Array
// let superHero = ["ironman", "hulk", "vision", "warmachine"];
// let num = [23, 34, 45, 67, 89, 90];
// let both = ["ironman", 34, "hulk"];
// console.log(typeof superHero);
// console.log(superHero.length);


// for (let i = 0; i <= superHero.length; i++) {
//     console.log(i, superHero[i]);
// }
// for (let val of superHero) {
//     console.log(val);
// } //for-of loop


// calculate the avg of marks
// let marks = [33, 34, 45, 67, 89, 90];
// let sum = 0;
// for (val of marks) {
//     sum = sum + val;
// }
// for (let i = 0; i <= marks.length - 1; i++) {
//     sum = sum + marks[i];
// }
// let avg = sum / marks.length
// console.log(`avg of marks is ${avg}`);


// question - For a given array with prices of 5 items - > [250, 645, 300, 900, 50] all itmes have an offer of 10 % OFFon them.Change the array to store final price after applying offer

// let items = [250, 645, 300, 900, 50] 6666
// for (i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
// }
// console.log(items); //prices of value after applying offer


//Array Methods

let superHero = ["ironman", "hulk", "vision", "warmachine", "hulk"];
let dcHero = ["superman", "batman", "aquaman", "flash"];
let num = [23, 45, 56, 34, 67, 89, 68];
let both = superHero.concat(dcHero); //combine to arrays
console.log(both);
console.log(both.length);

superHero.push("spider-man") //add in last index
console.log(superHero);

superHero.pop() //pop items from ending index
console.log(superHero);

superHero.unshift("spider-man"); //add items from starting index
console.log(superHero);

superHero.shift(); //delete from start and return
console.log(superHero);
num.slice(2, 6);
console.log(num);
console.log(num.slice(1, 3)); //not takeend index
num.splice(2, 0, 70); // at idx=2,56 replaced by 70
num.splice(2, 2, 70, 90);
console.log(num);
let result = superHero.lastIndexOf("hulk")
console.log(result);


let arr5 = ["neha", "vipin", "rahul", "rajan", "neha"]

function indexOF(val) {
    for (let i = 0; i < arr5.length; i++) {
        if (arr5[i] === val) {
            return i;
        }
    }
    return -1;
}
let ans = indexOF("vipin")
console.log(ans);

let arr9 = ["neha", "vipin", "rahul",
    "rajan", "neha", "vipun", "pankaj"
];

function lastIndex(val) {
    for (let i = arr9.length - 1; i >= 0; i--)
        if (arr9[i] === val) {
            return i;
        }
    return -1;
}
let find = lastIndex("vipin");
console.log(find);

let includeData = arr9.includes("pankaj");
console.log("includeData-->", includeData); //it use to  check that particuler data is presented inside that array or not(return true/false)


let arr0 = [3, 5, 6, 7, 9, 18, 19, 45]
let adultAge = 18;
let someData = arr0.some((age) => {
    return age > adultAge
})
console.log("someData-->", someData); //it return true after just get at least one condition executed
let arr6 = [23, 35, 26, 47, 19, 18, 19, 45]
let adultAges = 18;
let everyData = arr6.every((age) => {
    return age > adultAges
})
console.log("someData-->", everyData); // it demand all the data satisfy this condition

let ageData = [2, 5, 7, 19, 26];
let findAge = 18;
let findData = ageData.find((age) => {
    return age > findAge
})
console.log(findData); // findIndex return index of that value

let d = arr9.toString()
console.log(d);
console.log(arr9);
console.log(arr9.valueOf()); //default method just return like arr9