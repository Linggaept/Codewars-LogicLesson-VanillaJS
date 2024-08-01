// function makeNegative(num) {
//     if (num > 0) {
//         return -num;
//     } else if (num === 0) {
//         return 0;
//     } else if (num < 0) {
//         return num;
//     }
// }
const makeNegative = (num) => -Math.abs(num);

console.log(makeNegative(2))