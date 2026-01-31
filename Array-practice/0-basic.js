let arr = [2, 5, 6, 7, 8, "Hello", "Name", true]; //using syntax literals
console.log(arr[0]);
console.log(arr[7]);

//using constructor
const arr1 = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(arr1);

//modify the value
arr1[3] = 9;
console.log(arr1); //output:[1,2,3,9,5,6,7]


//commmon aaray methods
const arr2 = []