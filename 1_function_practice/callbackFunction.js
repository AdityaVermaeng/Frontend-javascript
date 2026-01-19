//calback function
function myFunc2(name) {
    console.log('inside mt func 2');
    console.log(`my name is ${name}`)
}

function myFunc(callback) {
    // console.log(a);
    // console.log("hello world");
    console.log('hello there i am a function i can use call backfunction')
    callback("aditya"); //name
}


myFunc(myFunc2);
//output:hello there i am a function i can use call backfunction 
//after that callback function called 
//output:inside my function2
//my name is aditya






//<................function returning function .......>

function myFunc() {
    // return a = [1, 2, 3, 4, 5, 6];
    // return a = { name: "AADI,age:23" }
    function aadi() {
        console.log('I am inside  function aadi')
    }
    return aadi;

}
const ans = myFunc();
console.log(ans); //it returns tha function named as aadi
ans(); //for calling the returning function output



//..................................>
function func1() {
    console.log('hello')

    function func2() {
        console.log('i am func2');

        function func3() {
            console.log(' iam func3')
        }
        return func3;
        // func3();
    }
    return func2;
    // func2();
}
let result = func1();
let inner = result()
    // console.log(inner())
inner()