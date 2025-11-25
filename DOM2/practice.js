// let body = document.querySelector("body")
// console.log(body);l=
let el = document.createElement("button");
el.innerText = "click-me";
el.style.backgroundColor = "red";
el.style.color = "white";
let newBtn = document.querySelector("body");
newBtn.prepend(el);

//Q2
let para = document.querySelector("p");
para.classList.add("content2");