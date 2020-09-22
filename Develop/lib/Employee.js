// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!email) {
            throw new Error("You are missing the email address.");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods to grab user input.
    getName() {
      return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
       return this.email
    }    
    getRole() {
        // return Employee;
        return "Employee";
    }

    
}


module.exports = Employee;