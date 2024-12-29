# Book Management System

## Overview

The **Book Management System** is a RESTful API built with Node.js, Express, and Sequelize to manage a collection of books and users. It supports CRUD operations for books and includes user authentication with JWT. The API uses MySQL as the database.

---

## Features

- User authentication with JWT
- Secure password hashing using bcrypt
- Role-based access for admin and users
- CRUD operations for books
- Validation 

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **ORM:** Sequelize
- **Authentication:** JWT
- **Password Hashing:** bcrypt
- **Environment Variables:** dotenv

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mathumitha-Gnanasekaran/Book_Management_System.git

   cd Book_Management_System

   Install the dependencies: ```bash npm install

---

## Running the Server

- Start the server: ```bash npm start

- The server will start on port 8080 by default. You can access it at:

http://localhost:8080

---

## Application Structure

- index.js: Main entry point of the application.
- models/: Contains Sequelize models for Books and Users.
- routes/: Contains route handlers for books and user authentication.
- controllers/: Business logic for handling requests and responses.
- middleware/: Custom middleware for authentication and error handling.

---

## Postman

- Create Blank Collection
- Rename bookstore
- Add Request

---

## API Endpoints

**Register**
- URL: http://localhost:8080/api/auth/register

- Method: POST

- Body:
{
  "username": "Username",
  "password": "Password123",
  "role": "admin"
}


**Login**
- URL: http://localhost:8080/api/auth/login

- Method: POST

- Body:
{
  "username": "Username",
  "password": "Password123"
}

1. Response:
{
  "message": "Login successful",
  "token": "jwt_token"
}


**Create a Book**
- URL: http://localhost:8080/api/book/books

- Method: POST

- Headers: Authorization: Bearer Token --> Token --> jwt_token

- Body:
{
  "title": "Book title",
  "author": "Author name",
  "genre": "Fiction",
  "publishedYear": 2024
}



**Get All Books**
- URL: http://localhost:8080/api/book/books

- Method: GET

Query Parameters (optional):

- URL: http://localhost:8080/api/book/books?page=1&limit=3
- page: Page number for pagination.
- limit: Number of books per page.


**Get All Books by ID**
- URL: http://localhost:8080/api/book/books/:id

- Method: GET


**Update a Book**
- URL: http://localhost:8080/api/book/books/:id

- Method: PUT

- Headers: Authorization: Bearer Token --> Token --> jwt_token

- Body: 
{
  "title": "Update Titile",
  "author": "Update Author",
  "genre": "Story",
  "publishedYear": 2024
}


**Delete a Book**
- URL: http://localhost:8080/api/book/books/:id

- Method: DELETE

- Headers: Authorization: Bearer Token --> Token --> jwt_token