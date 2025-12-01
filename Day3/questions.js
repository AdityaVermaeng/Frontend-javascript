//1.Create a function makeAdder(x)that returns another function which adds to any number passed to it
function makeAdder(x) {
    return function(y) {
        return x + y;

    }
}
let sum = makeAdder(5)
console.log(sum(9));


//2.


let count = 0;

function createCouter() {

    function counter() {

        console.log(count = count + 1)
    }
    counter()
}
createCouter();
createCouter();
createCouter();

//5
function greet(name) {
    return function() {
        console.log("Hello" + name);

    }

}
let g1 = greet("Raju")
g1()

//6.
function multiplier(a) {
    return function(b) {
        return a * b;
    }
}
let multiply = multiplier(8);
console.log(multiply(9));


//7
let btn = document.querySelector(".count")
btn.addEventListener("click", () => {
    count++
    btn.innerText = "Click:" + count;
})