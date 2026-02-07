fetch("://jsonplachttpeholder.typicode.com/posts")
    .then(function(response) {
        return response.json(); //convert response to json
    })
    .then(function(data) {
        console.log("GET Response:");
        console.log(data); //print data
    }).catch(function(error) {
        console.log("Error:", error); //network error
    });

//fetch data from text file

fetch("./fetchdata.txt")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log("GET Response:");
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });