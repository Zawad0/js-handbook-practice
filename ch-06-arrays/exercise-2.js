const prices = [100, 300, 200, 400, 900, 2000, 10000];

const pricesInString = prices.map((p)=> `${p}`+` BDT`);

console.log(pricesInString);
console.log(typeof pricesInString[0]); //shows string as the type
