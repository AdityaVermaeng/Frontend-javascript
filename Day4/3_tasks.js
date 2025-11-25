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

let factorial = (x) => {
    let fact = 1;
    for (let i = 1; i <= x; i++) {
        fact *= i;
    }
    return fact;

}
console.log(factorial(5))

//check the word count in a sentence
function wordCount(str) {
    // return str.split("").length
    let count = 1;

    for (v of str) {
        if (v == " ")
        // console.log(v)
            count++;
    }
    return count
}
console.log(wordCount("welcome to my site guyz!"));
console.log(wordCount("welcome to my site guyz! task 3"));