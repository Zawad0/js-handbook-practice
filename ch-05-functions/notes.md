# Chapter 05 — Functions


## Key takeaways 📋
- Functions are essentially code blocks that are reusable by a simple call to the function

- Functions allow the use of **parameters** which are basically placeholders we can pass values or variables on which then the functions can use. When passing a value or variable during a function call, we call it an argument.

- Functions will return values which lets the expression that calls said function to immediately use it 

- Functions can have default parameters. Which gives the variables a default value if none has been passed to the arguments

- Arrow functions are essentially compact functions. Many methods for containers like arrays will use them for different tasks

- Functions have the ability to call functions in its own code block. It can be other functions or its own self (which is called **recursion**). 

- Functions can be stored onto variables as in JS they are considered values too. Its also possible to pass these variables as arguments. This is used a lot in array methods


## My own thoughts 💭
> Yet again there isn't much to go over as I already have previous knowledge on this topic. But a few things I've learnt is the fact that functions can be stored in variables. Which makes it more interesting. Arrow functions or 'lambda functions' as they're called in other languages also behave differently here. As the `this` keyword won't work the same as in other languages. In JS, arrow functions will use `this` from its surrounding code as the `this` keyword used wont be the function's own version of it. Its a little bit confusing and I am certain later chapters will cover this more in-depth.


## Exercises completed ✅
- [x] Exercise 1 — Write a function isEven(n) that returns true or false, then use it inside a loop from 1 to 10.
- [x] Exercise 2 — Write celsiusToFahrenheit(c) using the formula F = C × 9/5 + 32.
- [x] Exercise 3 — Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max.
- [x] Exercise 4 — Rewrite your FizzBuzz from Chapter 4 as a function fizzbuzz(limit).
- [x] Exercise 5 — Write a function applyTwice(fn, value) that returns fn(fn(value)). Test it with a function that doubles a number.