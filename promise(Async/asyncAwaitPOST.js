//  async function postData() {
//      let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
//          method: "POST",
//          headers: {
//              "content-type": "application/json"
//          },
//          body: JSON.stringify({
//              title: "name",
//              body: "this is simple body",
//              userId: 1
//          })
//      })
//      let result = await data.json();
//      console.log("DATA posted", result);
//  }
//  postData()

async function sendData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        name: "rahul",
        email: "rahulsingh@gmail.com",
        age: 25
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        // console.log(response);
        console.log("Response", result);
    } catch (error) {
        console.log("Error:", error);
    }
}
sendData()