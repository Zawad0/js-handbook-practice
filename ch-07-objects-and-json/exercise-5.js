const cat = {
    name : `Jojo`,
    age : 2,
    weight : 5,
    color : `White with orange patterns`
}

const text = JSON.stringify(cat);
console.log(text);

const back = JSON.parse(text);
console.log(back);