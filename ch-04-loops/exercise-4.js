let x = 5;
//(i*2)-1

for(let i = 1;i<=5;i++){
    let z = ``;

    for(let h=1;h<x-i;h++) z+=` `;

    for(let j = 1;j<=(i*2)-1;j++){
        z+=`*`;
    }

    console.log(z);
}