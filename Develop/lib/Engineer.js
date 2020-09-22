// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    
    constructor(officeNumber) {
     this.officeNumber = officeNumber;
    }

    // methods to grab user input.
    getOfficeNumber() {
        return this.officeNumber;
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }    
    getRole() {    
    return "Manager";
    }

}

module.exports = Engineer;
