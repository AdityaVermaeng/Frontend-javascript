//synchronous code
console.log("task1 ");
console.log("task2 ");
console.log("task3 ");

//Asynchonous code
// console.log("task1 ");
// setTimeout(() => {
//     console.log("task2 ");
// }, 3000)

// console.log("task3 ");

//callback hell //nested callbacks
setTimeout(() => {
        console.log("task2 ");
        setTimeout(() => {
            console.log("task3 ");
            setTimeout(() => {
                console.log("task1");
                setTimeout(() => {
                    console.log("task0");
                }, 4000)
            }, 5000)
        }, 2000)

    }, 3000) //before the promise we use this callback hell

// callback hell or pyramid of DOOM



let cart = ["shoes", "cap", "shirt", "pant"];
api.CreateOrder(cart, function() {
    api.ProceesToPayment(
        function() {
            api.ShowOrderSummury(
                function() {
                    api.UpdateWallet()
                })
        })
})




//while we making an E-Comerce web site then first we want that create a order then after proceed to payment  after the payment we need to show order summury page then after we need to update the wallet

//this code becomes unreadable and unmaintainable due to callback function
//this creates two major problem  1.callback hell 2.inversion of control
//inversion of control means we just pass the code insinde the createOrder() and we are not doing anything we just depend on the createOrder() when it executed then it call that perticuler function which is passed through means we simmply loose our control over it and start trusting blindly on createOrderApi to proceed the payment

//importance callback are usefull to make javascript asynchronounsly execute the code