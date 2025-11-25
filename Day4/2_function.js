function taxCal(price) {
    return price * .10
}
let productPrice = 50000;
let total = taxCal(productPrice) + productPrice;
console.log(total);

//Anonymous 
let display = function() {
    console.log("welcome");
}
display();
display();
display();

//callback function
function addData(num1, num2) {
    return num1 + num2;
}

function minData(num1, num2) {
    return num1 - num2;

}

function calculate(num1, num2, callback) {
    console.log("Final calcultion", callback(num1, num2));
}
calculate(20, 30, addData);
calculate(60, 30, minData);


//Arrow function
let addData1 = (a, b) => {
        return a + b;
    }
    // addData1(10, 89);
console.log(addData1(10, 89));


//without curlybracket it automaticallly return the value
let mulData = (p, q) => p * q;
console.log(mulData(2, 3));
console.log(mulData(5, 3));