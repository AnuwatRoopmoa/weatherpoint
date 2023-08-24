// db.js

import mysql from 'mysql';

// Create a connection pool
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'express',
  password: 'Azerty123',
  database: 'express'
})

