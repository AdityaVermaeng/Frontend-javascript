//function inside a function
function add(a, b) {
    // console.log(a + b)
    console.log(this);


    function hii() {
        // console.log("Hello Bro");
        console.log(this); //undefined
    }
    hii()
}