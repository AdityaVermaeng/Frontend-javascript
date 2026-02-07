// localStorage.setItem("userName", "Aadi")
// console.log(localStorage.getItem('userName'));
let bodyElement = document.querySelector("body");
let allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        localStorage.setItem("ColorTheme", btn.innerHTML)
        localStorage.setItem("TIME", new Date().toLocaleTimeString()) //we want to remove this key from our local storage
        setColorThemeBody()

        // console.log();
    })
})

let setColorThemeBody = () => {
    let color = localStorage.getItem('ColorTheme')
    bodyElement.style.background = color

}
setColorThemeBody() //only when refresh it will execute
    // localStorage.removeItem("TIME") //it remove the "TIME "key from local storage

localStorage.clear() //it clear the all data from our local storage