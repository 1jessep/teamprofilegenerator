const fs = require("fs");
const { prompt } = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const template = require("./src/template");
const team = [];

const mainMenu = () => {
  prompt({
    type: "list",
    name: "task",
    message: "What type of employee would you like to create?",
    choices: ["Manager", "Engineer", "Intern", "Done"],
  }).then((answer) => {
    if (answer.task === "Manager") {
      askManager();
    } else if (answer.task === "Engineer") {
      askEngineer();
    } else if (answer.task === "Intern") {
      askIntern();
    } else if (answer.task === "Done") {
      console.log(team);
      const html = template.buildHtml(team);
      fs.copyFileSync("src/style.css", "dist/style.css");
      fs.writeFileSync("dist/output.html", html);
    }
  });
};

const askManager = () => {
  prompt([
    { type: "input", name: "name", message: "Enter the Employees name." },
    { type: "input", name: "ID", message: "Enter the Employees ID." },
    { type: "input", name: "email", message: "Enter the Employees email." },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the Employees office number.",
    },
  ]).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.ID,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
    mainMenu();
  });
};

const askEngineer = () => {
  prompt([
    { type: "input", name: "name", message: "Enter the Engineer's name." },
    { type: "input", name: "ID", message: "Enter the Engineer's ID." },
    { type: "input", name: "email", message: "Enter the Engineer's email." },
    { type: "input", name: "github", message: "Enter the Engineer's Github." },
  ]).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.ID,
      answers.email,
      answers.github
    );
    team.push(engineer);
    mainMenu();
  });
};

const askIntern = () => {
  prompt([
    { type: "input", name: "name", message: "Enter the Intern's name." },
    { type: "input", name: "ID", message: "Enter the Intern's ID." },
    { type: "input", name: "email", message: "Enter the Intern's email." },
    { type: "input", name: "school", message: "Enter the Intern's school." },
  ]).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.ID,
      answers.email,
      answers.school
    );
    team.push(intern);
    mainMenu();
  });
};

mainMenu();
