const generateHTML  = require('./src/index');

//set team profile variables 

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//required node modules 
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');

//create team array
const teamArray = [];

//begin questions

//manager

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is your manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the managers name");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter the ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the ID number for the manger")
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email')
                    return false;
                }
            }
        },
         {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter the office number")
                    return false;
                } else {
                    return true;
                }
            }
         }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

//add the employees

const addEmployee = () => {
    console.log(`
    ================
    Adding Employees to your team!

    ================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Form the choices below, please select your employee's designated role",
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: 'Provide the name of your employee',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },

        {
           type: 'input',
           name: 'id',
           message: 'Please enter the team member id number',
           validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log('Please enter a valid team number')
                return false;
            } else {
                return true;
            }
           }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the employees email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    console.log('Enter a valid email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the empolyees",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee github username")
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school',
            when: (input) => input.role  === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the Intern'school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmpolyee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]) 
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            
            console.log(employee);
        }
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    }) 
};

// generate HTML

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The team profile has been generated. Please look at the index.html file")
        }
    })
};

addManager() 
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err)
});