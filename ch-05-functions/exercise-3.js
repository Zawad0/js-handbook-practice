function max3(a, b, c){

    return a>b && a>c ? a : b>a && b>c ? b : c;
}

let x = 3, y = 2, z = 5;

console.log(`Biggest number : ${max3(x,y,z)}`);