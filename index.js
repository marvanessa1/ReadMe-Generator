// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Enter a discription of your application',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the instruction for installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter important usage information',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your application use?',
        choices:[
            "MIT",
            "Mozilla",
            "The Unlicense",
            "Application does not use a license",
        ],
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        fs.writeFile("./generatedReadMe/README.md", generateMarkdown(answers),(err)=>
        err ? console.error(err) : console.log("Successfully wrote to README.md")
        );
    });
}

// Function call to initialize app
init();
