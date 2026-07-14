# JavaScript Handbook — Exercises

My solutions to the practice exercises from *The JavaScript Handbook: A Beginner-Friendly Guide to Modern JavaScript and Data Structures & Algorithms*, compiled by **Abu Jafar Md Jakaria**, Senior Lecturer, Dept. of CSE, Metropolitan University — for the course **JavaScript Foundations, AI-Driven Project Development & Professional Identity**.

This repo tracks my progress chapter by chapter as I work through the book: reading each lesson, typing out the examples myself, and solving every exercise without AI assistance (per the handbook's own rules).

## 📖 About the Handbook

The book is split into three parts:

- **Part I — Language Foundations** (Ch. 1–7): variables, control flow, loops, functions, arrays, objects & JSON
- **Part II — Modern JavaScript in Practice** (Ch. 8–12): scope/hoisting/closures, the DOM, async JS, debugging, ES6+ features
- **Part III — Data Structures & Algorithms in JavaScript** (Ch. 13–18): Big-O, searching, sorting, stacks/queues, recursion/linked lists/hash maps, trees

## 🗂 Repo Structure

Each chapter gets its own folder containing one file per exercise, plus a scratch file for typing out the in-chapter code examples.

```
js-handbook-exercises/
├── ch01-getting-started/
├── ch02-variables-and-data-types/
├── ch03-operators-and-control-flow/
├── ch04-loops/
├── ch05-functions/
├── ch06-arrays/
├── ch07-objects-and-json/
├── ch08-scope-hoisting-closures/
├── ch09-the-dom/
│   ├── index.html
│   └── app.js
├── ch10-asynchronous-javascript/
├── ch11-errors-debugging-clean-code/
├── ch12-es6-toolbox/
├── ch13-big-o/
├── ch14-searching-algorithms/
├── ch15-sorting-algorithms/
├── ch16-stacks-and-queues/
├── ch17-recursion-linked-lists-hashmaps/
├── ch18-trees/
└── README.md
```

Naming convention for exercise files: `exercise-N.js` (e.g. `exercise-1.js`, `exercise-2.js`) inside the relevant chapter folder, matching the exercise numbering in the book.

## ▶️ Running the Code

Most exercises run directly with Node.js:

```bash
node ch04-loops/ex5.js
```

Chapter 9 (the DOM) exercises need a browser instead — just open the chapter's `index.html` file, or serve it locally:

```bash
npx serve ch-09-the-dom
```

## ✅ Progress Tracker

### Part I — Language Foundations
- [x] Ch 1 — Getting Started (3 exercises)
- [x] Ch 2 — Variables and Data Types (4 exercises)
- [x] Ch 3 — Operators and Control Flow (4 exercises)
- [x] Ch 4 — Loops (5 exercises)
- [x] Ch 5 — Functions (5 exercises)
- [x] Ch 6 — Arrays (6 exercises)
- [ ] Ch 7 — Objects and JSON (5 exercises)

### Part II — Modern JavaScript in Practice
- [ ] Ch 8 — Scope, Hoisting, and Closures (3 exercises)
- [ ] Ch 9 — The DOM (3 exercises / mini-projects)
- [ ] Ch 10 — Asynchronous JavaScript (4 exercises)
- [ ] Ch 11 — Errors, Debugging, and Clean Code (3 exercises)
- [ ] Ch 12 — ES6+ Toolbox (4 exercises)

### Part III — Data Structures & Algorithms
- [ ] Ch 13 — Big-O (2 exercises)
- [ ] Ch 14 — Searching Algorithms (4 exercises)
- [ ] Ch 15 — Sorting Algorithms (4 exercises)
- [ ] Ch 16 — Stacks and Queues (4 exercises)
- [ ] Ch 17 — Recursion, Linked Lists, and Hash Maps (5 exercises)
- [ ] Ch 18 — Trees and a Roadmap Forward (4 exercises)


## 🧰 Tech / Tools

- **JavaScript (ES6+)**
- **Node.js** for running non-browser exercises
- **Browser DevTools** for Chapter 9 (DOM) exercises
- No frameworks, no libraries, no AI-generated solutions — just plain JS, per the course rules

## 📝 Notes

- Every exercise is typed out by hand (no copy-paste), following the handbook's own study method.
- Where relevant, comments in the code capture my prediction *before* running, and what actually happened.
- Mini Project 1 (To-Do app with `localStorage`, from Ch. 9) and the live "Get a Joke" app (Ch. 10) live in their own subfolders once complete.

## 📚 Reference

- [MDN Web Docs](https://developer.mozilla.org)
- [javascript.info](https://javascript.info)
- Practice platforms: Codewars, Exercism, freeCodeCamp, LeetCode Easy

---

