// let str = "My name is Tom";
// console.log(str);
// console.log(str.length);
let specialCharacter = `This is template literals`;
// console.log(specialCharacter);


//use case of template literals
let obj = {
    item: "pen ",
    price: 10,
    color: " red ",
};
console.log("the cost of", obj.item, "is", obj.price, "rupeess"); //so complecated
let output = `the cost of ${obj.item} is ${obj.price} rupees`; // using template literals it makes easy to understand the code
console.log(output);

//escape characters
// let greet = "Welcome!\n How can i help You \t??"
// console.log(greet);


//String methods in javascript
//there are some built-in-functions to manipulate the strings

// let someStr = "I want to get a job.";
// let newStr = someStr.toUpperCase();
// someStr.toLowerCase();
// let newStr1 = someStr.toLowerCase();
// let newStr2 = someStr.trim(); // only remove white spaces from statrting and ending
// console.log(newStr);
// console.log(newStr1);
// console.log(newStr2);


//slice() method
let str1 = "alphabetical";
let str2 = "order";
// let newStr = str.slice(2, 6);//not include the last of end index
// console.log(newStr); //phab as output
// let newStr = str1.concat(str2);
// console.log(newStr);
// let newStr = str2.replace("d", "o");
// console.log(newStr);
let newStr = str2.charAt(2)
console.log(newStr);