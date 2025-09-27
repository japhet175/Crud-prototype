CRUD Prototype - Node.js Backend
---
A basic Node.js backend demonstrating CRUD operations with file-based storage.

Project Overview
---
Simple REST API built with pure Node.js to handle Create, Read, Update, Delete operations. Uses JSON files for data persistence without external dependencies.

Features
---
RESTful API endpoints

File-based data storage

HTTP method handling (GET, POST, PUT, DELETE)

Error handling

JSON request/response format

Setup
---
Clone the repository
---
bash
git clone https://github.com/japhet175/Crud-prototype.git
cd Crud-prototype
Install dependencies

bash
npm install
Start the server

bash
npm start
Server runs on http://localhost:3000

API Endpoints
---
GET /api/users - Get all users

GET /api/users/:id - Get user by ID

POST /api/users - Create new user

PUT /api/users/:id - Update user

DELETE /api/users/:id - Delete user

Testing with curl
---
Get all users:

bash
curl http://localhost:3000/api/users
Create user:

bash
---
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
Update user:

bash
---
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com"}'
Delete user:

bash
---
curl -X DELETE http://localhost:3000/api/users/1
Project Structure
src/server.js - Main server file

data/users.json - Data storage

routes/ - API route handlers

utils/ - Helper functions

Technologies
---
Node.js

HTTP module

File System module

JSON file storage

Purpose
---
This project focuses on understanding Node.js core modules and building REST APIs without frameworks. It serves as a foundation for learning backend development concepts.

Note
---
This is a learning prototype using file-based storage. Not intended for production use.

