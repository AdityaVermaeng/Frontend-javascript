function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data Recieved"), 2000);
    })
}
getData().then(res => {
        console.log(res);
    }) //using promise it return the "Data Reiceve"


//using async/await
async function fetchData() { //create a normal function and put async to starting of the function
    let data = await getData(); //call the upper function and store in a variable put await to the start of function
    console.log(data); //normally console.log the variable which store the function
}
fetchData();


//Another example
async function loadUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users"); //in promise we need to use then( ) for handle this fetch
    //now we are going to use await instead of then()
    let data = await response.json();
    console.log(data);
}
loadUsers();

//Desturcturing with async await and also use of Promise.all()
async function runParallel() {
    const p1 = fetch("https://dummyjson.com/products").then(res => res.json());
    const p2 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
    const [products, users] = await Promise.all([p1, p2]); //dest
    console.log(products, users);
}
runParallel();