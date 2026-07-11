//Program to print fibonacci series of n numbers

function fibo(x){
	if (x<=0) 
		return 0;
	else if(x<=1) 
		return 1;
	else
		return (fibo(x - 1) + fibo (x - 2)); 
}


let n = 6;
let series = ``;


for (let i = 0; i<n; i++) series+=fibo(i)+` `;


console.log(series);