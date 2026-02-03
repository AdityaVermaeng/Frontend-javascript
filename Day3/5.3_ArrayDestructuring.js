function restPara(...rest) {
    return rest;
}
console.log(restPara(10, 12, 23, 34, 56, 'hello'));

var x = 100; {
    var x = 500; //cx overwrite by 500
}
let a = x; {
    let a = 10000;
}
console.log(a);