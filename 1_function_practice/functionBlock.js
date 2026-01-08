//block scope vs function scope

//let and const are block scope variable
{
    let firstName = "Aditya";
    console.log(firstName); //Aditya
}
// console.log(firstName);//error

{
    const firstName = "Anshu";
    console.log(firstName); //Anshu
}
//console.log(firstName);//error





//var is function scope

function myApp() {
    if (true) {
        var firstName = "Harshit";
        console.log(firstName);
    }
    if (true) {
        // let lastName = "Rana"; //give error
        var lastName = "Rana";
    }
    console.log(firstName);
    console.log(lastName);
}
myApp();