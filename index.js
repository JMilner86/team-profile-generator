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
            };
        });
    };

    const engineerGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: `Please enter the engineer's name`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Engineer ID:',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: `Please enter the engineer's email`,
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's email`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'github',
                message: `Please enter the Engineer's GitHub username`,
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Engineer's GitHub username`);
                        return false;
                    };
                }
            }
        ]).then(engineer => {
            const generated = new Engineer(
                engineer.engineerName,
                engineer.engineerId,
                engineer.engineerEmail,
                engineer.github
                );
            employees.push(generated);
            teamGen();
        });
    };

    const internGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: `Please enter the intern's name`,
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's name`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Intern ID:',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's ID`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: `Please enter the intern's email`,
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's email`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'school',
                message: `Please enter the Intern's school`,
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Intern's school`);
                        return false;
                    };
                }
            }
        ]).then(intern => {
            const generated = new Intern(
                intern.internName,
                intern.internId,
                intern.internEmail,
                intern.school
                );
            employees.push(generated);
            teamGen();
        });
    };
    managerGen();

};

init();
