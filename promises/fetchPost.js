fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application / json "

        },
        body: JSON.stringify({
            title: "Test Title",
            body: "This is simple body",
            userId: 1
        })
    }).then(response => response.json())
    .then(data => {
        console.log("Response from API:");
        console.log(data);
    })