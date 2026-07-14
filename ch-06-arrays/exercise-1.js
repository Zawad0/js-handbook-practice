let arr = [3, 7, 2, 9, 4];

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i<arr.length; i++){
    if (arr[i] > max) max = arr[i];
}

console.log(`Max : ${max}`);