function repeatStr(n, s) {
    let hasilUlang = '';
    for (let i = 0; n > i; i++) {
        hasilUlang += s;
    }
    return hasilUlang;
}

// let repeatStr = (n, s) => s.repeat(n)
console.log(repeatStr(2, "cek"))