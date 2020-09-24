// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, school) {        
        super(name, id, email);        
        this.school = school;
    }
    // methods to grab user input.    
    getName() {
        return this.name;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }    
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    internPrompts = async () => {
   await     inquirer.prompt([
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
            let i = new Intern(e.name, e.id, e.email, internSchool);
            console.log(i);
            // console.log(empArray);
            if (addAnother === "Yes") {
                init();
            } else {
                console.log("Thank you, come again!")
            }
            
        })
    }
}
module.exports = Intern;
