console.log("hii"); //goto the callstack and there create a GEC then execute this code
setTimeout(function(cb) {
    console.log("Inside the callback")
}, 1000); //go to the browser side and browser execute this and send it to callback queue and then event loop push it to the call stack then call stack execute this 
console.log("end"); //same as first line

//output: hii,end,Inside the callback