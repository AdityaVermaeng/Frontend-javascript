// let head2 = document.querySelector("h2")
// console.dir(head2.innerText)
// head2.innerText = head2.innerText + "  from Apna college"
let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value${idx}`;
    idx++;
}
// console.log(divs);
// divs[0].innerText = "new unique value1";
// divs[1].innerText = "new unique value2";
// divs[2].innerText = "new unique value3";