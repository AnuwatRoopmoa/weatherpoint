// db.js

import mysql from 'mysql';

// Create a connection pool
export const pool = mysql.createPool({
  host: 'sql303.byetcluster.com',
  user: 'express',
  password: 'Azerty123',
  database: 'express'
})

