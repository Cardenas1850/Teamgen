const Employee = require("./employee");

// constructur to begin engineer

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email, github);
        this.github = github;
    }
    


getGithub() {
    return this.github;
}

getRole() {
    return "Engineer";
}
}

module.exports = Engineer;