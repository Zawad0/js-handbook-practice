const products = [
    {name: `Radeon RX 7600 XT`, price: 40000},
    {name: `Ryzen 5 5600X`, price: 17500},
    {name: `Case`, price: 3000},
    {name: `PSU 700W`, price: 6000},
    {name: `Monitor 1080p`, price: 10000},
    {name: `SSD 1TB`, price: 100000}, 
    {name: `DDR5 8GB RAM`, price: 999999} 
    //ssd and ram prices were adjusted for the future, according to real life
];

products.sort((a,b)=>b.price - a.price);


console.log(products);