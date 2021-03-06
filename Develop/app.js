const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Not sure how to use this
const render = require("./lib/htmlRenderer");

const Employee = require("./lib/Employee");

const empArray = [];

const init = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "team",
            message: "Would you like to build an engineering team? An engineering team must have at least one Manager.",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(response => {
        let team = response.team;

        if (team === "Yes") {
            engineeringTeam();
        } else {
            console.log("Thank you, come again!")
            process.exit;
        }
    })
}

// function to initialize program
const engineeringTeam = () => {
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
                validate: answer => {
                    if (answer.indexOf("@") != -1) {
                        return true
                    }
                    else {
                        return "Please enter a valid email address."
                    }
                }
            }
        ])
        .then(response => {
            let employeeName = response.name;
            let employeeId = response.id;
            let employeeEmail = response.email;
            let employeeType = response.class;

            e = new Employee(employeeName, employeeId, employeeEmail);
            m = new Manager(e.employeeName, e.employeeId, e.employeeEmail);
            i = new Intern(e.employeeName, e.employeeId, e.employeeEmail);
            r = new Engineer(e.employeeName, e.employeeId, e.employeeEmail);

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
const managerPrompts = async () => {
    await inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?",
            validate: answer => {
                const number = parseInt(answer)
                if (number) {
                    return true
                }
                return "Please enter a number";
            }
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
        let officeNumber = response.office;
        let addAnother = response.newEmployee;
        let m = new Manager(e.name, e.id, e.email, officeNumber);
        empArray.push(m);
        // console.log(m)

        if (addAnother === "Yes") {
            engineeringTeam();
        } else {
            checkForManager(m);
        }
    })
}
const engineerPrompts = async () => {
    await inquirer.prompt([
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
        let github = response.github;
        let addAnother = response.newEmployee;
        let r = new Engineer(e.name, e.id, e.email, github);
        empArray.push(r);

        if (addAnother === "Yes") {
            engineeringTeam();
        } else {
            checkForManager();
        }
    })
}
const internPrompts = async () => {
    await inquirer.prompt([
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
        let school = response.school;
        // could save one line by moving right hand side operator into if case.
        let addAnother = response.newEmployee;
        let i = new Intern(e.name, e.id, e.email, school);
        empArray.push(i);

        if (addAnother === "Yes") {
            engineeringTeam();
        } else {
            checkForManager();
        }
    })
}
const writeOutput = () => {
    fs.writeFile(outputPath, render(empArray), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
const checkForManager =  (m) => {
        // console.log(m)
        if (m === undefined) {           
           init();
        } else {            
            writeOutput();
        }
    
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
