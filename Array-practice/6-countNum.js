//count even numbers

let arr = [10, 29, 23, 22, 24, 12, 4, 6];
let count = 0;
for (let val of arr) {
    if (val % 2 == 0) {
        count++;
    }
}
console.log(count);