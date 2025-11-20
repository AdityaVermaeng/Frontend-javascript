let student = ["neha", "React", 56, "Noida"];
// let name = student[0];
// let subject = student[1];
// console.log(name);
// console.log(student);
let [name, subject, marks, address] = student;
console.log(name);
console.log(subject);
// console.log(student);





var count = 0;

function setCount() {

    count = count + 1;
}
// setCount();
// console.log(count);
// setCount();
// console.log(count);
// setCount();
// console.log(count);

function useState() {
    return [count, setCount];

}
let [countData, setCountData] = useState() //[count, setCount]
console.log(countData);
setCountData()
console.log(countData)


let data = ["Ruchi", [21, 45, 67]];
let [nameOne, [maths, science, hindi]] = data;
console.log(science);


let data2 = [34, 4, 5, 56, 78, 98, 6, 9, 7, 3, 5];
let [m2, ...res] = data2;
console.log(m2); //34 store in variable
console.log(res); //all remain value store in an arr named res;

//custom logic
let data3 = [34, 4, 5, 56, 78, 98, 6, 9, 7, 3, 5]
let m3 = data3[0];
let rest = [];

for (let i = 1; i < data3.length; i++) {
    rest.push(data3[i]);
}
console.log(m3);
console.log(rest);