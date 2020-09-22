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

    // method which prints all of the stats for a character
    getName() {
        // console.log(`Stats for ${this.name} are as following:`);
        // console.log(`Each attack will do ${this.strength} damage.`);
        // console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
        // console.log("------------");
    }
    getId() {
        // console.log(`Stats for ${this.name} are as following:`);
        // console.log(`Each attack will do ${this.strength} damage.`);
        // console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
        // console.log("------------");
    }
    getEmail() {
        // console.log(`Stats for ${this.name} are as following:`);
        // console.log(`Each attack will do ${this.strength} damage.`);
        // console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
        // console.log("------------");
    }
    // method which determines whether or not a character's "hitpoints" are less then zero
    // and returns true or false depending upon the outcome
    getRole() {
        // if (this.hitPoints <= 0) {
        //     console.log(`${this.name} has been defeated!`);
        //     return false;
        // }
        return Employee;
    }

    // // method which takes in a second object and decreases their "hitPoints" by this character's strength
    // attack(opponent) {
    //     console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
    //     opponent.hitPoints -= this.strength;
    // }
}


module.exports = Employee;