let janian = 'rohinga'
janina = 'Pubali'
const priyoPerson = 'Jorina';

//defult parameter
function getName(first, last = 'Chowdury') {
    return first + ' ' + last
}

//template string
const myPeople = `my fevorite persion ${priyoPerson} and his full name is ${getName('Jorina')}. My name is ${janina}.`
console.log(myPeople)

//arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y
    const secondPart = x - y
    const thirdPart = z / x
    const result = (firstPart + secondPart + thirdPart)
    return result
}
const numbers = [2, 3, 45, 43, 64, 12]
const min = Math.min(...numbers)
