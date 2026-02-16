let user = {
    name: "Aditya",
    age: 22,
    city: "Delhi",
    country: "India"
};
//question1- count the keys of object
let count = Object.keys(user).length;
console.log(count); // 4


//Q2-  is age present or not
console.log("age" in user); // true
console.log(user.hasOwnProperty("age")); // true
console.log("ages" in user); // false