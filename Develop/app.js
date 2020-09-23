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
        .then(response => {
            let employeeName = response.name;
            let employeeId = response.id;
            let employeeEmail = response.email;
            let employeeType = response.class;

            // console.log(employeeType);
            switch (employeeType) {
                case "Manager":
                    (managerPrompts())
                    break;
                case "Engineer":
                    (engineerPrompts())
                    break;
                case "Intern":
                    (internPrompts())
                    break;
                default:
                    (console.log('Nothing supplied'))
            }
        });    
}

const engineerPrompts =  () => {
     inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        }
    ]).then(response => {
        let engineerGithub = response.github;
        console.log(engineerGithub);
        return engineerGithub
    })
}

const managerPrompts = () => {
     inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(response => {
        let managerOffice = response.office;
        console.log(managerOffice);
        return managerOffice;
    })
}

const internPrompts =  () => {
     inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is the name of the intern's school?"
        }
    ]).then(response => {
        let internSchool = response.school;
        console.log(internSchool);
        return internSchool;
    })    
}

// function call to initialize program
init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
