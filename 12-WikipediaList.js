let pluck = (data, property) => data.map(item => item[property]);

const data = [{ name: "Lingga", age: 25 }, { name: "John", age: 30 }, { name: "Doe", age: 20 }];
console.log(data[0]);

console.log(pluck(data, 'age'));