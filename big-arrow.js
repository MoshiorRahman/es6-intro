const add = (number1, number2) => number1 + number2;
const sum = add(12, 18);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 3, 4);

const fiveTimes = (num) => num * 5;
const output = fiveTimes(20)

const sixTimes = num => num * 6;
const total = sixTimes(10);

const getName = () => 'Brandon Matkolam';
const name = getName();
console.log(name)

const mathOperation = (x, y) => {
    const sum = x + y
    const diff = x - y
    const result = sum * diff
    const output = result * 5
    return output;
}
const value = mathOperation(20, 12)
console.log(value)