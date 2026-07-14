const student = {
    name: `Zawad`,
    dept: `CSE`,
    semester: 10,
    skills: [`C++`, `Java`, `JavaScript`, `Python`, `Flutter`, `SQL`,
        `Bash scripting`, `Git`
    ]
};

console.log();
console.log(
    `Hi my name is ${student.name}. Im a student in the ${student.dept} department.\n`+
    `Currently I am on my ${student.semester}th semester in this University.\n`+
    `My skills include but aren't limited to : \n\n`+
    `${student.skills.join(', ')}.`
);