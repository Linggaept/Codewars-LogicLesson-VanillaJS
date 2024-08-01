// let solution = (str) => str.split("").reverse().join('')

function solution(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');

    return joinString;
}

console.log(solution('hello'));