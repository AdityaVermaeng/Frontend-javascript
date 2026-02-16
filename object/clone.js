let user = {
    name: "Aditya",
    age: 22,
    city: "Delhi",
    country: "India"
};
let obj2 = {...user };
obj2.age = 25;
console.log(obj2);
// age updated to 25
console.log(user); ///original object