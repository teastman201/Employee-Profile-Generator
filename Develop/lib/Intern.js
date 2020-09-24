// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

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
}
module.exports = Intern;
