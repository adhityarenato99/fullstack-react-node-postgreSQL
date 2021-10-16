"# fullstack-reactjs-nodejs-postgreSQL" 

This is simple full-stack for CRUD to input user and email data using React.js, Node.js, Express and PostgreSQL database.

- The backend will be running on port:5050
- The frontend will be running on port:3000

For the backend installation
1. git clone
2. import the postgresql database
3. npm install
4. nodemon index

For the frontend installation
1. npm install
2. npm run start




#---- CREATE DATABASE AND TABLE -----#
CREATE DATABASE api;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  email VARCHAR(200)
);

# ----------------------------------- #
