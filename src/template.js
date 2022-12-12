function buildHtml(team) {
  let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
        <header><h1><center>TEAM PROFILE GENERATOR<center></h1></header>
    </head>
    <body>`;

  // make more html out of stuff
  team.forEach((employee) => {
    if (employee.getRole() === "Engineer") {
      // append engineer html
      html += engineerHtml(employee);
    } else if (employee.getRole() === "Manager") {
      html += managerHtml(employee);
    } else if (employee.getRole() === "Intern") {
      // append intern html
      html += internHtml(employee);
    } else {
      html += employeeHtml(employee);
    }
  });
  html += `</body>
    </html>`;
  return html;
}

function employeeHtml(employee) {
  return `
    <div class="employee">
        <h3>Employee</h3>
        <p>${employee.getName()}</p>
        <p>${employee.getId()}</p>
        <p>${employee.getEmail()}</p>
    </div>
    `;
}

function managerHtml(manager) {
  return `
  <div class="container">
      
          <h3>Manager</h3>
          <p>${manager.getName()}</p>
          <p>${manager.getId()}</p>
          <p>${manager.getEmail()}</p>
          <p>${manager.getOffice()}</p>
            
    </div>
      `;
}

function engineerHtml(engineer) {
  return `
  <div class="container">
        
          <h3>Engineer</h3>
          <p>${engineer.getName()}</p>
          <p>${engineer.getId()}</p>
          <p>${engineer.getEmail()}</p>
          <p>${engineer.getGithub()}</p>
                
    </div>
      `;
}

function internHtml(intern) {
  return `
  <div class="container">
      
            <h3>Intern</h3>
            <p>${intern.getName()}</p>
            <p>${intern.getId()}</p>
            <p>${intern.getEmail()}</p>
            <p>${intern.getSchool()}</p>
         
    </div>
        `;
}

module.exports = { buildHtml };
