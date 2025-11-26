//Async  await
let doHomework = (subject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${subject} homework Done`)

        }, 1000);
    })
}

let finishHomework = async() => {
    // let myTask = await doHomework("math")
    // console.log(myTask);
    // let myTask1 = await doHomework("English");
    // console.log(myTask1);
    // let myTask2 = await doHomework("Hindi")
    // console.log(myTask2); //after all the upper side task completion then below task executed
    let allPromises = await Promise.all(
        [doHomework("Math"),
            doHomework("English"),
            doHomework("Hindi"),
            doHomework("History"),
        ]
    )
    console.log(allPromises);
    console.log("all the Homework completed");
    // console.log("hii");

}
finishHomework()