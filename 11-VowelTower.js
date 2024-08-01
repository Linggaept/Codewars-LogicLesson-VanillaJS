// function disemvowel(str) {
//     const splitStr = str.split("");
//     const vocal = "aAiIuUeEoO";

//     for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr[i] !== vocal) {
//             splitStr[i] = '';
//         }
//     }

//     const result = splitStr.join('');
//     return result;
// }

let disemvowel = (str) => str.replace(/[aAiIuUeEoO]/g, '');

console.log(disemvowel("This website is for losers LOL!"))