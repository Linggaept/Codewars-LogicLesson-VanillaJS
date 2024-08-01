// function doubleChar(str) {
//     let double = [];
//     for (let i = 0; i < str.length; i++) {
//         double += str[i] + str[i];
//         console.log(double)
//     }
//     return double;
// }

const doubleChar = (str) => str.split("").map(a => a + a).join('')

console.log(doubleChar('Adidas'));