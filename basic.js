//array]
const numbers = [23, 34, 64, 745, 74, 34, 65, 45]
const numberCount = numbers.length;
numbers.push(333);
numbers.pop();
numbers[3] = 555;
if (numbers.indexOf(333) != -1) {

}
if (numbers.includes(333)) {

}
console.log(numbers)