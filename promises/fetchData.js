fetch('https://jsonplaceholder.typicode.com/users').
then((data) => {
    // console.log(data.json); //return a promise which is on pending state but holds the data
    return data.json()
}).then((response) => {
    console.log(response);
})