import mysql from 'mysql';
import dbConfig from '../config/db-config.js';

// MySQL connection configuration
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD
});

// Connect to MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL!');

  // SQL query to create the database
  const createDBQuery = `CREATE DATABASE IF NOT EXISTS ${dbConfig.DATABASE}`;

  // Create database
  connection.query(createDBQuery, (err, result) => {
    if (err) {
      console.error('Error creating database:', err);
      connection.end(); // Close the connection in case of error
      return;
    }

    console.log('Database created successfully:', result);
    connection.end(); // Close the connection after database creation
  });
});
