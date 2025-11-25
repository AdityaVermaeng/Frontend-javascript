let obj = {
    name: "Aditya",
    age: 90,
    address: "Noida",
    isPass: true,
    1: 20,
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.isPass);
// console.log(obj .1);//error
console.log(obj[1]);

// add/update/delete key in object
obj.number = 9988880
console.log(obj);

//object destructuring
let userId = 89;
let user = {
    userName: "Aditya verma",
    age: 22,
    address: "delhi",
    userId,
}
let { userName } = user;
// console.log(user.userId);
console.log(userName);

//rest operator
let person = {
    name: "Alice",
    age: 34,
    city: "New-york",
    country: "USA",
}
let { name, ...rest } = person;
console.log(name);
console.log(rest); //return as an array

//nested destructuring in object

const man = {
    name: "Lalit",
    address: {
        city: "gkp ",
        country: "india",
    }
}
let { address: { city, country } } = man;
console.log(city);
console.log(country);