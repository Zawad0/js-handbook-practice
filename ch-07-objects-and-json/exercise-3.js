const student = {
    name: `Zawad`,
    dept: `CSE`,
    semester: 10,
    skills: [`C++`, `Java`, `JavaScript`, `Python`, `Flutter`, `SQL`,
        `Bash scripting`, `Git`
    ],

};

const {name, semester} = student; //destructuring and storing into name and semester variables


console.log(name, semester);