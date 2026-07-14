# Chapter 02 — Variables and Data Types


## Key takeaways 📋
- In JS, variables are containers that store values 
- `let` and `const` are keywords mainly used to declare the variables
    * `let` : Used for variables that will change in the future
    * `const` : Used for variables that will never and cannot change in the future
- Names in variables cant contain a digit in the beginning
- Variables should be named meaningfully and follow a consistent naming convention e.g **camelCase** `let firstName = "John"`

- Variable data types can be checked with the `typeof` keyword

- Strings can be used with `` (backticks), '', "". They can be concatenated using the + operator. 

- Using **backticks** are preferred as they allow the free use of single and double quotes. They also create **template literals** that allow the use of variables within a string using `${}`

## My own thoughts 💭
> Honestly not much to say here. This chapter is yet again intentionally simple. The one thing 
> that caught me off guard also yet again was how forgiving JS is. This time with its variable declaration. Since variables does not require the specification of a data type. We can declare any variable and initialize it later with the desired value without ever having to specify its data type. This will throw errors in most other languages.
> The ability to use string literals with backtick is something I appreciate using at it makes the code look cleaner, readable and easier to write.
 

## Exercises completed ✅
- [x] Exercise 1 — Create const variables for your name and department and a let variable for your semester. Print a sentence using a template literal.
- [x] Exercise 2 — Predict the output of console.log(typeof null) — then run it and search the web for why the answer is surprising
- [x]  Convert the string "19.5" to a number, add 0.5, and print the result.