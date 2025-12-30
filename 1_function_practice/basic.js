//simple function(function declaration)
function greet() {
    console.log("Hello JavaScript");
    console.log("Welcome to js practice")
}
greet()

// function declaration with function parameters
function add(a, b) {
    let p = a + b;
    console.log(p);
}
add(5, 6);

//function declaration with default parameter
function multi(x, y = 9) {
    let result = x * y;
    console.log(result);
}
multi(5)
multi(5, 7)

//default parameter interview
function test(a = 10, b) {
    console.log(a, b)
}
test(); // 10, undefined
test(6); //6,undefined


// function declaration with hoisting
square(5);

function square(num) {
    console.log(num * num)
}