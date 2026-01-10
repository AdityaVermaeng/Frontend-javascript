//para destructuring
//object
// react used most
const person = {
    firstName: "Anshu",
    gender: "male",
    age: 21,
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
function printDetails({ firstName, gender, age }) {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);