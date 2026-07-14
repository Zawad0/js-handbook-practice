const students = [
{name: "John", cgpa: 3.7},
{name: "Aman", cgpa: 4.0},
{name: "Arif", cgpa: 3.1},
{name: "Carl", cgpa: 2.9},
{name: "Tim", cgpa: 3.9},

];

const aces = students
.filter((s)=> s.cgpa >= 3.5)
.map((s)=>s.name);

console.log(aces);