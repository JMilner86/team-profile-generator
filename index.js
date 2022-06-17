const inquirer = require('inquirer');
const { pageGen, writeFile } = require('./src/pageTemplate');


const Employees = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const init = () => {
    const genManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: `Please enter the Manager's name`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    }
                    else {
                        console.log(`Please enter the Manager's name`);
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'managerId',
                message: `Please enter the Manager's ID.`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    }
                    else {
                        console.log(`Please enter the Manager's ID.`);
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'managerEmail',
                message: `Please enter the Manager's email.`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log(`Please enter the Manager's email.`);
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'officeNum',
                message: `Please enter the Manager's office number`,
                validate: officeNum => {
                    if(officeNum) {
                        return true;
                    } else {
                        console.log(`Please enter the Manager's office number`);
                        return false;
                    };
                }
            }
        ]).then(manager => {
            const generated = new Manager(
                manager.managerName,
                manager.managerId,
                manager.managerEmail,
                manager.officeNum
            );
            Employees.push(generated);
            teamGen();
        });
    };

    const teamGen = () => {
        inquirer.prompt([
            {
                type: `list`,
                name: `role`,
                message: `What is the role of the employee?`,
                choices: [`Engineer`, `Intern`, `Finish team`]
            }
        ]).then(input => {
            switch(input.role) {
                case `Engineer`:
                    engineerGen();
                    break;
                case `Intern`:
                    internGen();
                    break;
                    default:
                        writeFile(pageGen(employees));
            }
        })
    }

}   
