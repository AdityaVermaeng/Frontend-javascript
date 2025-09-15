//Datatypes

//premitive Data types
// let age = 23;
// console.log(typeof age);
// let fullName = "Tony Stark";
// console.log(typeof fullName);
// isFollow = true;
// console.log(typeof isFollow);
// let a;
// console.log(typeof a);
// let x = null;
// console.log(typeof x);
// let y = BigInt("123455")
// console.log(typeof y);
// let m = Symbol("Hello!&")
// console.log(typeof m);

//Non-premitive Data type
const student = {
    fullName: "Saurabh",
    age: 34,
    id: 123456,
    isMarried: false,
    highSchool_percent: 89.89
};
student["isMarried"] = "true"

console.log(student);
console.log(student.age);
// console.log(student["age"]);
console.log(student.isMarried);

//Pratice questionto create aobject about a product
const product = {
    productName: "Parker jotter",
    rating: 4.5,
    offer: 5,
    realPrice: 295,
    offerPrice: 280,
}
console.log(product);