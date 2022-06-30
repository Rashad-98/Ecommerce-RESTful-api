# Storefront Backend Project

## Port number for database and server
The server is running on port 3000.
The database is running on port 5432.

## Package installation instructions
Run the command npm i on your terminal.

## Database setup instructions
- **create a user:** CREATE USER full_stack_user WITH PASSWORD '12345';
- **create a database:** CREATE DATABASE my_database;
- **Grant all database privileges to user in my_database:** GRANT ALL PRIVILEGES ON DATABASE my_database TO full_stack_user;
- **testing database:** when running the command "npm run test", the testing database is created and then deleted after the test is complete.

## Setup database and server instructions
- run the command "db-migrate up" on your terminal to setup the database schema.
- run the command "npm run tsc" on your terminal to transpile the code to JavaScript.
- run the command "npm run start" on your terminal to start the server.
- to perform testing, run the command "npm run test" on your terminal.

## Environment variables
- host=localhost
- database=my_database
- database_test=my_database_test
- user=postgres
- password
- ENV
- saltRounds
- pepper
- token_secret