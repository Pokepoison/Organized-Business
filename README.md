# Organized-Business

## Description

The Organized-Business is a command-line application designed to help business owners view and manage departments, roles, and employees within their company. It provides an organized way to plan and organize business operations by offering various functionalities, such as viewing department details, roles, employees, adding new departments, roles, employees, and updating employee roles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install Organized-Business, follow these steps:

1. Clone the repository to your local machine.

    A. In GitBash do a git clone of the repository 
    
    B. Navigate to the project directory.

    C. cd Organized-Business

    D. Install the required dependencies using npm install. Set up your MySQL database with the necessary schema. You can use a schema.sql file or set up the schema manually. Ensure that you update the database configuration in your app.js file with your database credentials.

    E. Start the application with node app.js


## Usage

The Organized-Business provides the following options:

1. View all departments: Displays a formatted table showing department names and department IDs.
2. View all roles: Presents the job title, role ID, department, and salary for each role.
3. View all employees: Shows a formatted table with employee details, including IDs, first names, last names, job titles, departments, salaries, and managers.
4. Add a department: Prompts you to enter the name of a new department, which is then added to the database.
5. Add a role: Allows you to input the title, salary, and department for a new role, which is added to the database.
6. Add an employee: Prompts for the employee's first name, last name, role, and manager, and adds the employee to the database.
7. Update an employee role: Select an employee to update and provide their new role, which is then updated in the database.


## License

This project is licensed under the MIT License.


## Contributing

Contributions are welcome! If you would like to contribute to this project, please open an issue or pull request.


## Tests

Currently, there are no specific tests included in the project. However, you can manually test the functionality of the application by running it and performing the operations described in the "Usage" section.


## Questions

For any questions, contact me at:
- GitHub: [pokepoison](https://github.com/pokepoison)

      