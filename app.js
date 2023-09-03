const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Add error handling for database connection errors.

const inquirer = require('inquirer');

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          // Add other options as needed.
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          console.log('Goodbye!');
          break;
      }
    });
}

function viewDepartments() {
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
    
        console.table(results); // Display departments in a formatted table.
        mainMenu(); // Return to the main menu after displaying data.
      });
    }

function viewRoles() {
    connection.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
    
        console.table(results); // Display roles in a formatted table.
        mainMenu(); // Return to the main menu after displaying data.
      });
}

function viewEmployees() {
  // Implement code to view employees from the database.
}

function addDepartment() {
  // Implement code 
}

function addRole() {
  // Implement code 
}

function addEmployee() {
  // Implement code 
}

function updateEmployeeRole() {
  // Implement code 
}

mainMenu(); // Start the CLI
