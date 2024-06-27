// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: 'title'
    }, 
    {
        type: "input",
        message: "Type out a brief description of the project.",
        name: 'description'
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "instillation",
        default: "N/A"
    },
    {
        type: "input",
        message: "Do you have any instructions or examples of how the application should be used?", // Screenshots?
        name: "usage",
        default: "N/A"
    },
    {
        type: "list", // How many licenses
        message: "What license is associated with this application?",
        name: "license",
        choices: ["N/A", "MIT"],
        default: "N/A"
    },
    {
        type: "input",
        message: "How would you like people to contribute to the application?",
        name: "contribution",
        default: "N/A"
    },
    {
        type: "input",
        message: "Are there any example tests that a user can run to prove that the application is running correctly?",
        name: "test",
        default: "N/A"
    },
    {
        type: "input",
        message: "What is your github URL?",
        name: "gitHubURL"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress"
    }]; //tablecontents

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, error => 
        error ? console.error(error) : console.log('Success')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        writeToFile(response.title, generateMarkdown(response))
    });
};

// Function call to initialize app
init();
