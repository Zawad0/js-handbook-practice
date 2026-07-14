const numbers = [100, 55, 11, 12, 14, 16, 29];

const count = numbers.reduce((c, item)=> item%2===0 ? c+1 : c,0);

console.log(count);