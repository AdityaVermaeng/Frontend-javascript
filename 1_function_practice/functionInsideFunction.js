function app() {
    const myFunc = () => {
        console.log("Hello from myFunc")
    }
    const addNum = (num1, num2) => {
        return num1 + num2;
    }
    const multiply = (a, b) => {
        return a * b;
    }
    myFunc();
    console.log(addNum(6, 9));
    console.log(multiply(5, 6));
}
app();