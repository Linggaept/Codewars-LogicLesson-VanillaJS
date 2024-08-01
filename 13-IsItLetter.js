let isNumber = (n) => !/^-?\d+(\.\d+)?([eE]-?\d+)?$/.test(n)

console.log(isNumber('DC3'));