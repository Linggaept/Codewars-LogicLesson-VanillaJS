function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) { //perulangan

        if (arr[i] > 0) {
            result += arr[i];

        }


    }
    return result;

    //     // arr.forEach(angka => {
    //     //     result += angka;
    //     //     console.log(arr)
    //     // })

    //     // let positiveSum = arr.reduce((a, b) => {
    //     //     return a + b;
    //     // }, 0)

}

// const positiveSum = (arr) => arr.filter(a => a > 0).reduce((partialSum, a) => partialSum + a, 0); //cara 1 liner

console.log(positiveSum([1, 2, 3, 4, 5]))