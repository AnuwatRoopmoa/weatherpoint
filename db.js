// db.js

import mysql from 'mysql';

// Create a connection pool
export const pool = mysql.createPool({
  host: 'sql303.infinityfree.com',
  user: 'if0_34890453',
  password: 'UWG54PJC8G',
  database: 'if0_34890453_express'
})

