const products = [
    {name: `Ryzen 7 5800X`, price: 17500, stock: 30},
    {name: `ARC B580`, price: 49900, stock: 15},
    {name: `WD Blue 1TB`, price: 15000, stock: 50},
    {name: `MSI MAG A650BN 650W PSU`, price: 5500, stock: 60},

];


function totalStock(products){
    return products.reduce((sum,item)=>sum+item.stock,0);
}


console.log(totalStock(products)); //30+15+50+60 = 155
