fetch("./fetchdata.txt", {
        method: "DELETE"
    }).then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log("Delete Response:");
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error:", error);
    })
    //Do not use second then


fetch("//jsonplachttpeholder.typicode.com/posts", {
    method: "DELETE"
}).then(function(response) {
    console.log(response);
})

.catch(function(error) {
    console.log("Error:", error);
})

fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    })
    .then(res => console.log(res.json()))
    .catch(err => console.log(err));