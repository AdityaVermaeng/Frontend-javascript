let user = {
    name: "Aditya",
    age: 22,
    city: "Delhi"
};

for (let key in user) {
    console.log(key, user[key]);
}