// function DNAtoRNA(dna) {
//     let splitDna = dna.split("");
//     for (let i = 0; splitDna.length > i; i++) {
//         if (splitDna[i] === 'T') {
//             splitDna[i] = 'U'
//         }
//     }

//     return splitDna.join('');
// }

let DNAtoRNA = (dna) => dna.split("").map(char => char === 'T' ? 'U' : char).join('') //menggunakan map




console.log(DNAtoRNA("TTGT"))