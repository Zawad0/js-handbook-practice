# Chapter 03 — Operators and Control Flow


## Key takeaways 📋
- We can use many different arithmetic and logical operators in JS
- The `%` operator shouldn't be overlooked because its most useful when finding even or odd numbers
- The use of `===` is preferred more over `==` as the former will check both values and data types. Same goes for `!==` over `!=`
- Conditionals like `if`, `else`, `else if` are used almost exactly like in other languages

- Ternary operators allow the use of conditionals but in a more compact form

- `Switch` and `case` is useful for when `if` or `else if` is required but there are too many conditions possible. 
    >**e.g checking the month to figure out the season. 12 months would require 12 different if statements**



## My own thoughts 💭
> This chapter was as easy as before due to my experience with these concepts in other languages. But one interesting thing I've learnt was the use of `===` or `!==` as it compares both value and data type of the variables. Which allows for more 'strictness' I am guessing. Its what the professionals prefer after all. I've also tried to use ternary operators here more than the other conditionals. I wanted to experiment with them and see how short I can make some of the expressions. Not sure if it adds more complexity to the code or takes it away...
> This is slightly off topic but another thing to note is that the `%` operator is not only just useful for even and odd checking but also specific scenarios where we have to circle or wrap back between a specific line of numbers or indexes. This is useful especially when we're using a loop and have a container like an array and have to iterate over it while also circling back to the beginning after reaching the end like in a **circular queue**. 

```javascript
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
let index = 0;

for (let i = 0; i < 12; i++) {
    console.log(days[index]);

    index = (index + 1) % days.length;
}
```
` output: Mon Tue Wed Thu Fri Mon Tue Wed Thu Fri Mon Tue`
 

## Exercises completed ✅
- [x] Exercise 1 — Write a program that prints whether a number is positive, negative, or zeroPrint a sentence using a template literal.
- [x] Exercise 2 — Given a temperature variable, print 'Hot' above 32, 'Pleasant' between 20 and 32, otherwise
'Cold'
- [x] Exercise 3 —  Use the ternary operator to print 'Even' or 'Odd' for a given number.
- [x] Exercise 4 —  Write a switch that maps a month number (1–12) to its season in Bangladesh