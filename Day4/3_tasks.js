//Task-1  count the vowels
let vowelsLettter = "aeiouAEIOU";
let checkVowels = (str) => {
    let count = 0;
    for (let v of str) {
        // console.log(v);
        if (vowelsLettter.includes(v))
        // console.log(v);
            count++;
    }
    return count

}
console.log(checkVowels("welcometohomeaeiou"))

//task2- factorial of a number