// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//         console.log(e);
// console.log("btn was clicked");
// let a = 34;
// a++;
// console.log(a);
// }

let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked");
    // console.log(evt.type);
    // console.log(evt.target);
});
const handler2 = () => {
    console.log("button 1 was clicked-handler2");
}

btn1.addEventListener("click", handler2);
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked -handler3");
});
btn1.removeEventListener("click", handler2)
let div = document.querySelector("div");
// div.onmouseover = (evt) => {
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX, evt.clientY);
// console.log("you are inside the div")
// };