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