"use strict"
console.log(this); //this refer to global object named as window inside the browser

function data() {
    console.log(this);
}
// data(); //with strict mode it gave the output "undefined"
//with unstrict mode it return the window obeject (global object)
window.data();

// let obj = {
//     name: "naman",
//     x: function() {
//         console.log(this);
//     }
// }
// obj.x(); //it refers to object itself

let obj = {
    name: "naman",
    x: () => {
        console.log(this);
    }
}
obj.x(); //refers to the window object

let obj1 = {
    name: "Nejha",
    a: function() {
        let y = () => {
            console.log(this);

        }
        y();
    }

}
obj1.a() // refer to the object itself