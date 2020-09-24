// const inquirer = require("inquirer");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, email, github) {        
        super(name, id, email);        
        this.github = github;
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
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    engineerPrompts = async () => {
      await  inquirer.prompt([
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
            
            let r = new Engineer(e.name, e.id, e.email, engineerGithub);
            
            console.log(r);
            

            if (addAnother === "Yes") {
                
                init();
            } else {
                console.log("Thank you, come again!")
            }
            
        })
    
    }
}



module.exports = Engineer;
