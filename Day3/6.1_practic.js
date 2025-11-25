//array is given and get 1st and 3rd value only
let arr = [90, 85, 88];
let [first, , third] = arr
console.log(first, third);

//nested destructuring
const user = {
    name: "lia",
    address: {
        city: "mumbai",
        country: "India",
    }
}
let { address: { city } } = user;
console.log(city);