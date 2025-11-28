let addBtn = document.querySelector("#addTodoBtn")
let todoInput = document.querySelector("#todoInput")
let todoList = localStorage.getItem("TODO") ? JSON.parse(localStorage.getItem("TODO")) : []
let todoListul = document.querySelector("#todoList")

addBtn.addEventListener("click", () => {
    if (todoInput.value.trim() === "") return alert("Please enter a task")

    let obj = {
        title: todoInput.value,
        isStatus: true
    }

    todoList.push(obj)
    localStorage.setItem("TODO", JSON.stringify(todoList))

    todoInput.value = ""
    showAllTodoList()
})

let showAllTodoList = () => {
    let todoList = localStorage.getItem("TODO") ? JSON.parse(localStorage.getItem("TODO")) : []
    let list = ""

    todoList.forEach((item, index) => {
        list += `<li><span>${index + 1}. ${item.title}</span><button onclick="deleteTask(${index})">&times;</button></li>`
    })

    todoListul.innerHTML = list
}

function deleteTask(index) {
    let todoList = JSON.parse(localStorage.getItem("TODO"))
    todoList.splice(index, 1)

    localStorage.setItem("TODO", JSON.stringify(todoList))
    showAllTodoList()
}

showAllTodoList()