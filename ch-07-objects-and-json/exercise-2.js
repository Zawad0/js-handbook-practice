const student = {
    name: `Zawad`,
    dept: `CSE`,
    semester: 10,
    skills: [`C++`, `Java`, `JavaScript`, `Python`, `Flutter`, `SQL`,
        `Bash scripting`, `Git`
    ],


    describe(){
        console.log(
        `Name : ${this.name}\n`+
        `Department : ${this.dept}\n`+
        `Semester : ${this.semester}\n`+
        `Skills : ${this.skills.join(', ')}`
        );
    }
};


student.describe();