async function deleteData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const data = {
        name: "rahul",
        email: "rahul123@gmail.com",
        age: 25
    }
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("ERROR", error);

    }
}
deleteData()