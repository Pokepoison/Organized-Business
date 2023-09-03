const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database.');
// });

connection.on('error', (err) => {
    console.error('Database connection error:', err);
    // You can handle the error here, such as attempting to reconnect or exiting the application.
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      // Handle the error here, such as attempting to reconnect or exiting the application.
    } else {
      console.log('Connected to the database.');
    }
  });


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
    connection.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
    
        console.table(results); 
        mainMenu();
    });
}

function addDepartment() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the department:',
      },
    ])
    .then((answers) => {
      const departmentName = answers.departmentName;
      connection.query('INSERT INTO department (name) VALUES (?)', [departmentName], (err, result) => {
        if (err) throw err;
        console.log(`Department '${departmentName}' added.`);
        mainMenu();
      });
    });
}


function addRole() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the role title:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the role salary:',
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Enter the department ID for this role:',
      },
    ])
    .then((answers) => {
      const { title, salary, department_id } = answers;
      connection.query(
        'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
        [title, salary, department_id],
        (err, result) => {
          if (err) throw err;
          console.log(`Role '${title}' added.`);
          mainMenu(); 
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "Enter the employee's first name:",
      },
      {
        type: 'input',
        name: 'last_name',
        message: "Enter the employee's last name:",
      },
      {
        type: 'input',
        name: 'role_id',
        message: "Enter the employee's role ID:",
      },
      {
        type: 'input',
        name: 'manager_id',
        message: "Enter the employee's manager's ID (if any, or leave empty):",
      },
    ])
    .then((answers) => {
      const { first_name, last_name, role_id, manager_id } = answers;
      connection.query(
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [first_name, last_name, role_id, manager_id],
        (err, result) => {
          if (err) throw err;
          console.log(`Employee '${first_name} ${last_name}' added.`);
          mainMenu(); // Return to the main menu after adding the employee.
        }
      );
    });
}


function updateEmployeeRole() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'employee_id',
        message: "Enter the employee's ID you want to update:",
      },
      {
        type: 'input',
        name: 'new_role_id',
        message: "Enter the new role ID for the employee:",
      },
    ])
    .then((answers) => {
      const { employee_id, new_role_id } = answers;
      connection.query(
        'UPDATE employee SET role_id = ? WHERE id = ?',
        [new_role_id, employee_id],
        (err, result) => {
          if (err) throw err;
          console.log(`Employee with ID ${employee_id} updated to new role ID ${new_role_id}.`);
          mainMenu(); // Return to the main menu after updating the employee's role.
        }
      );
    }); 
}

mainMenu(); // Start the CLI
