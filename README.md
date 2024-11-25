# Employee_Management_System
This Employee Management System is a web-based application built using React for the frontend and Spring Boot for the backend, with MySQL as the database. It allows you to manage employees by performing CRUD operations like Create, Read, Update, and Delete.

## Table of Contents
1. [Overview](https://www.google.com "Overview")

2. [Features](https://www.google.com "Features")

3. [Technologies Used](https://www.google.com "Technologies Used")
   
4. [User Interface](https://www.google.com "User Interface")



## Overview
The Employee Management System allows administrators to manage employees easily. This application enables creating new employee records, viewing, editing, and deleting existing records. It is designed to be simple, with a focus on ease of use for managing employee data. The frontend is built with React and communicates with a Spring Boot backend, which uses MySQL to store employee details. The backend supports a RESTful API for CRUD operations.

## Features
- Frontend Features:
  
    + Employee List: Displays all employees in a table format with options to view, edit, or delete records.
    + Add New Employee: A form to add a new employee to the system with fields like name, email, phone, and department.
    + Edit Employee: Allows editing existing employee records.
    + View Employee Details: View detailed information for each employee.
    
- Backend Features

    + CRUD Operations: Allows the creation, reading, updating, and deletion of employee records.
    + RESTful API: Exposes endpoints for frontend-backend interaction.
        * GET /api/employees: Fetch all employees.
        * GET /api/employee/{id}: Fetch a specific employee by ID.
        * POST /api/employee: Add a new employee.
        * PATCH /api/employee/{id}: Update an existing employee.
        * DELETE /api/employee/{id}: Delete an employee.
    + MySQL Database: Employee data is stored and managed in a MySQL database.

## Technologies Used
- Frontend Technologies

    + React.js: A JavaScript library for building user interfaces.
    + React Router: For routing between pages.
    + CSS: Custom styles for components and design.
    
- Backend Technologies

    + Spring Boot: Framework used to build the RESTful API for managing employees.
    + MySQL: Database for storing employee records.
    + Postman: Used to test the backend API endpoints during development.

## User Interface

- Employee List
![Screenshot 2024-11-25 144809](https://github.com/user-attachments/assets/67050a15-364f-4632-9c1b-4d134497f58c)

- Add New Employee
![Screenshot 2024-11-25 144913](https://github.com/user-attachments/assets/24d893a3-a706-40c1-a191-7109a6b5c8da)

- Edit Employee
![Screenshot 2024-11-25 144831](https://github.com/user-attachments/assets/7ef36760-fa6d-4e3d-b99a-39793a2b5fb3)
