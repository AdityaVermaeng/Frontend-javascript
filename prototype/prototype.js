let arr2 = new Array()
console.log(arr2.__proto__);
console.log(Array.prototype);

let check = true;
console.log(check.__proto__);
console.log(Boolean.prototype);


let data = "abhi";
console.log(data.__proto__);
console.log(String.prototype);


let arr4 = [3, 5, 7, 9, 4, 6, 8, 12, 2];
Array.prototype.checkEven = function() {
    let evenArr = [];
    for (let i = 0; i <= this.length; i++) {

        if (this[i] % 2 === 0) {
            evenArr.push(this[i]);

        }
    }
    // return "no even no found"
    return evenArr;

}
console.log(arr4.checkEven());