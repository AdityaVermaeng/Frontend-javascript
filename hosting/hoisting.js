console.log(greet);
console.log(data2);
console.log(name11) //trying to access the variable before the initialization 

var name11 = "rahul";

function greet() {
    console.log("Hello guyzzz...");
} //cause of function is a heart of javascript so it uses global execution context and memory allocated from the memory execution and the allow for code execution phase when we access the function

// console.log(greet);

//for let and const there is no memory allocated they are present in temoraral daed zone(TDZ)
let data2 = function() {
    console.log("this is arrow function");
}

//Cannot access 'data2' before initialization cause of absence of memory allocation

var data3 = function() {
        console.log("this is arrow function");
    }
    //due to variable it also gave the undefined result