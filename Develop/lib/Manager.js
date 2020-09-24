// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {        
        super(name, id, email);
        this.officeNumber = officeNumber;        
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
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }

   managerPrompts = async () => {
     await   inquirer.prompt([
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
            
            // managerPrompts seems to be adding itself to the manager object
            let d = new Manager(e.name, e.id, e.email, managerOffice);
                console.log(d);
            if (addAnother === "Yes") {
                init();
            } else {
                
                console.log("Thank you, come again!")
            }
            
        })
    }

}
module.exports = Manager;
