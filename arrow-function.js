//function declareation 
function add(num1, num2) {
    return num1 + num2
}
//function expression
const add2 = function add2(num1, num2) {
    return num1 + num2
}

//function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2
}
//arrow-function
const add4 = (num1, num2) => num1 + num2;

console.log(add(14, 13))
console.log(add2(14, 13))
console.log(add3(14, 13))
console.log(add4(14, 13))