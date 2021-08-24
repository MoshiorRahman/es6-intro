const numbers = [23, 34, 23, 42, 53, 64, 42, 35]
// console.log(numbers)
// console.log(...numbers)

const max = Math.max(23, 53, 26)
const maxInArray = Math.max(...numbers)
// console.log(max, maxInArray)

const numbers2 = [22, ...numbers, 55]
console.log(numbers2)