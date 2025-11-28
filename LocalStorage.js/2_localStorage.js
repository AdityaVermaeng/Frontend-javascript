// let user = {
//     name: "Aditya",
//     age: 23,
//     address: "noida"
// }
// localStorage.setItem("USER", JSON.stringify(user))
// localStorage.setItem("no", hii)

let getUserData = JSON.parse(localStorage.getItem('USER'))
console.log(getUserData);