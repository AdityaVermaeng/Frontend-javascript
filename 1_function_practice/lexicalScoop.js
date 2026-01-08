const myVar = "value1";

function myApp() {
    // const myVar = "value1";
    const myfunc = () => {
        // const myVar = "value59";
        console.log("hii i am myfunc", myVar)
    }
    console.log(myVar);
    myfunc();

}
myApp();




//lexical scope chaining
const value = 'global value';

function parent() {
    // const value = "Parent value";

    const child = () => {
        // const value = "first child value";
        console.log("I am first child", value);
        const child2 = () => {
            // const value = "own value";
            console.log("I am  Child2", value)
        }
        child2();
    }
    console.log(value);
    child();
}
parent();