function change() {
    let ele = document.getElementById("main");
    // ele.innerText = "this is heading";
    ele.style.flexDirection = "column";
    let ele1 = documnet.createElement("p");
    ele1.innerText = "hello";
    ele.appendChild(ele1);
}

function getClock() {
    let date = new date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = h + ":" + m + ":" + s;
    setTimeout(() => {
        getClock()
    }, 1000)
    document.getElementsById("clock").innerText = time;

}
getClock()