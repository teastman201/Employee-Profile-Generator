const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const employeeList = [];
// const employeeObj = {};

// function to initialize program
init = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is name of the employee?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID of the employee?",
                validate: answer => {
                    const number = parseInt(answer)
                    if (number) {
                        return true
                    }
                    return "Please enter a number";
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of the employee?",
            },
            {
                type: "list",
                name: "class",
                message: "Which class does the employee belong to?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }
        ])
        .then((employeeObj) => {
            // let employeeName = response.name;
            // let employeeId = response.id;
            // let employeeEmail = response.email;
            // let employeeType = response.class;

            // employeeObj.name = employeeName;
            // employeeObj.id = employeeId;
            // employeeObj.email = employeeEmail;
            // employeeObj.type = employeeType;

            // employeeObj = {
            //     name,
            //     id,
            //     email,
            //     class
            // }

            // console.log(employeeType);
            switch (employeeObj.class) {
                case "Manager":
                    (managerPrompts(employeeObj))
                    break;
                case "Engineer":
                    (engineerPrompts(employeeObj))
                    break;
                case "Intern":
                    (internPrompts(employeeObj))
                    break;
                default:
                    (console.log('Nothing supplied'))
            }
        });
}

init();

const engineerPrompts = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        },
        {
            type: "list",
            name: "newEmployee",
            message: "would you like to add another employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(response => {
        let engineerGithub = response.github;
        let addAnother = response.newEmployee;
        console.log(addAnother)
        employeeObj.github = engineerGithub;
        console.log(engineerGithub);
        console.log(employeeObj);
        if (addAnother === "Yes") {
            init();
        } else {
            console.log("Thank you, come again!")
        }
        return engineerGithub
    })

}

const managerPrompts = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        },
        {
            type: "list",
            name: "newEmployee",
            message: "would you like to add another employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(response => {
        let managerOffice = response.office;
        let addAnother = response.newEmployee;
        employeeObj.office = managerOffice;
        console.log(managerOffice);
        if (addAnother === "Yes") {
            init();
        } else {
            console.log("Thank you, come again!")
        }
        return managerOffice;
    })
}

const internPrompts = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is the name of the intern's school?"
        },
        {
            type: "list",
            name: "newEmployee",
            message: "would you like to add another employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(response => {
        let internSchool = response.school;
        let addAnother = response.newEmployee;
        employeeObj.school = internSchool
        console.log(internSchool);
        if (addAnother === "Yes") {
            init();
        } else {
            console.log("Thank you, come again!")
        }
        return internSchool;
    })
}
