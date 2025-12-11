 async function loadAllData() {

     // Step 1: Start all fetch requests together (in parallel)
     const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
     const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
     const commentsPromise = fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json());

     // Step 2: Wait for all requests to finish
     const data = await Promise.all([usersPromise, postsPromise, commentsPromise])
         //  .then(responses => {

     //      const usersRes = responses[0];
     //      const postsRes = responses[1];
     //      const commentsRes = responses[2];

     // Step 3: Convert all responses to JSON
     //      return Promise.all([
     //          usersRes.json(),
     //          postsRes.json(),
     //          commentsRes.json()
     //      ]);
     //  })
     //  .then(data => {
     //          const users = data[0];
     //          const posts = data[1];
     //          const comments = data[2];

     //          // Step 4: Print all data
     //          console.log("Users:", users);
     //          console.log("Posts:", posts);
     //          console.log("Comments:", comments);
     //      })
     const users = data[0];
     const posts = data[1];
     const comments = data[2];
     //  .catch(error => {
     //      console.log("Error:", error);
     //  });
     console.log("Users:", users);
     console.log("Posts:", posts);
     console.log("Comments:", comments);
 }

 loadAllData();