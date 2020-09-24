// How am I supposed to utilize these?
// Should I push the user response into this file then retrieve it when it's time to write?
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

const empArray = [];
const empObj = {};

// function to initialize program
init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "class",
                message: "Which type of employee would you like to add?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            },
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
            }
        ])
        .then(response => {

            let employeeName = response.name;
            let employeeId = response.id;
            let employeeEmail = response.email;
            let employeeType = response.class;

            e = new Employee(employeeName, employeeId, employeeEmail);
            m = new Manager;
            i = new Intern;
            r = new Engineer;

            console.log(r);
            console.log(e);
            console.log(m);
            console.log(i);

            switch (employeeType) {
                case "Manager":
                    (m.managerPrompts())
                    break;
                case "Engineer":
                    (r.engineerPrompts())
                    break;
                case "Intern":
                    (i.internPrompts())
                    break;
                default:
                    (console.log('Nothing supplied'))
            }
            
        });
        render;
}

// function call to initialize program
init();

// employee name should be array element with id, class, email, github/school/office as objects
// push name to array, push everything else to the name as objects

// when user selects no then write file using htmlrenderer.js


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
