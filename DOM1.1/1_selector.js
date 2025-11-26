//getElementbyId
let el = document.getElementById("demo");
// console.log(el);

// console.log(el.innerText);
// console.log(el.innerHTML);
el.innerText = "Hello DOM";
el.innerHTML = "<b>Hello DOM</b>";
console.log(el);

//getElementbyClassName
let heading = document.getElementsByClassName("head")[0];
// console.log(heading); // heading is an Array like object  
// console.log(heading.innerHTML);
// console.log(heading.innerText);

//getElementbyTagName

let bold = document.getElementsByTagName("b")[0];
console.log(bold.innerText);

//querrySelector
let div = document.querySelector(".card");
// console.log(div);
// console.log(div.innerHTML);
// console.log(div.innerText);
// div.innerHTML = "<span>it is a inline element</span>"
// div.innerText = "Hello";
// console.log(div);