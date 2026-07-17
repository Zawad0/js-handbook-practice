//Prediction : The loop will print 0,1,2,3,4 with 1 second intervals

for(let i = 0; i<5; i++){
    setTimeout(() => {
        console.log(i);
     }, 1000);
}
console.log(`First loop over`);

//Prediction : The loop will do the same thing as the first loop
for(var i = 0; i<5; i++){
    setTimeout(() => {
        console.log(i);
     }, 1000);
}

console.log(`Second loop over`);

/*
Output :
First loop over
Second loop over
0
1
2
3
4
5
5
5
5
5

Conclusion : The result was not what was predicted. After searching as instructed, the conclusion is that
var creates a global shared variable for the entire loop. Because the for loop is synchronous, it executes
instantanously over all of its iterations before the timers get to start. This is because the setTimeout func
is asynchronous. After the loop finishes, the global variable i is incremented to 5. Then the timers go off
and they all print 5.

Whereas, let creates a block scope. It creates a fresh instance of the variable for every loop. So after the
looop finishes iterating, each setTimeout function still has access to the original value of the variable when
the function was called. Thus, printing the numbers starting from 0 to 4 (value in every iteration of i).

Because of how synchronous and asynchrnous code executes, the lines "First loop over" & "Second loop over",
were also printed before any number was. The loops did finish before these lines were printed. But the
setTimeout function calls were not.

*/
