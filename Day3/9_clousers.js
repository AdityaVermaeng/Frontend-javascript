let a = "Aditya";

function hii() {
    let a = "kundan"; //lexical scope of function
    console.log(a);
}
hii();

function parent() {
    let a = "kunal";

    function child() {
        console.log(a);
    }
    child();
}
parent();

// let count = 0; //this is not an ideal method to initialize the variable in globle scope

function increment() {
    let count = 0;
    console.log(count + 1); //it gives multiple time of 1 so we can't get desire output
}
increment()
increment()
increment()

function parentCount() {
    let count1 = 0;

    function childCount() {
        console.log(count1 += 1);
    }
    childCount();
}
parentCount();
parentCount();
parentCount();
parentCount();