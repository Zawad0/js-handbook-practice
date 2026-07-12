function applyTwice(fn, value){

    return fn(fn(value));    
}


function doubles(n){
    return 2*n;
}

console.log(applyTwice(doubles, 4));

