let obj = {
    firstName: "Aditya",
    lastName: "Verma",
    subject: "JavaScript",
    marks: 79,
    address: "Noida",
    status: true,
    fullName: function() {
        console.log(this); //return all  the object
        console.log(this.firstName + "" + this.lastName); //this is refer to the whole object
    },
    "hello data ": "hi",
    address: {
        state: "delhi",
        city: "noida",
        pinCode: 213004
    },
    marks1: [23, 45, 67, 89, 8]

}
let key = "subject";

obj.fullName() //we use obj.key name then it will return the output
console.log(obj[key]);
console.log(obj.address.city);
console.log(obj.marks1[3]);
console.log(obj.address ? obj.address.city : undefined); //when obj.address available then print address other wise print undefined


let obj2 = {
    name: " rahul",
    address: "noida",
    marks: 76,
    age: 23
}
for (let i in obj2) {
    console.log(`${i}:${obj2[i]}`);
}

let customerDetail = {
    userId: 12345,
    account: {
        accountNumber: 45678,
        holder: {
            profile: {
                firstName: "Rahul",
                lastName: "Verma",
                age: 23
            }
        }
    }
}
console.log(customerDetail.account.holder.profile.firstName.city); //give undefined
// console.log(customerDetail.account && customerDetail.account.details.holder && customerDetail.account.holder.profile); //this makesmore complexity ofcode we only waste our time
// console.log(customerDetail?.account?.holder?.profile?.address?.city);



//rest operator in object
// function sum(num1, num2) {
// console.log(num1 + num2); //takes only 2 aurguments as function contains
// }
// sum(8, 9);
// sum(1, 3, 5); //it  not work for 3 variable or value


//inbuit fucntion of  javascript (argument)
function sum(name, ...args) {
    console.log(arguments); //it contains all the comming value and store in a special type of array whic is an object
    let sum = 0;
    for (let i in arguments) {
        sum = sum + arguments[i];
    }
    console.log(name);
    console.log(sum);
}
// sum1(2, 4, 6, 8);
arr2 = [2, 4, 6, 8]
    // sum = ("neha", ...arr2);
    // sum("neha", 2, 4, 6, 8); //now it convert alll the value in strings

//note- inside the prameter if there is a three dot then it calls rest otherwise it known as spread operator

let fullName1 = function(city, status) {
    // console.log(this);
    console.log(`${this.firstName}-${this.lastName} and my city is: ${city} and status is :${status}`);
    return
}
let obj4 = {
        firstName: "Aditya",
        lastName: "Verma",

    }
    // obj4.fullName1();
    // let nameData = obj4.firstName // this changes his value how function calls by user
    // console.log(nameData);
    // let fullName1Data = obj4.fullName1
    // fullName1Data() //here this keyword loose his scope //give undefined


//call apply bind used when this lost his scope

let teacherData = {
        firstName: "Saurabh",
        lastName: "tiwari",
        // fullName1: function() {
        //     // console.log(this);
        //     console.log(`${this.firstName}-${this.lastName}`);
        // }
    }
    // obj4.fullName1()
    // teacherData.fullName1()

let staffData = {
        firstName: "Anubhav",
        lastName: "tiwari",
    }
    // console.log(fullName1.call(teacherData, "delhi", "student"));
    // console.log(obj4.fullName1.call(staffData));
    // console.log(fullName1.apply(teacherData, ["up", "trainer"]));
let resultTeacherData = fullName1.bind(teacherData);
resultTeacherData("haryana", "student")