const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Use 'connectionString' to pass the URL
  ssl: {
    rejectUnauthorized: false,  // This is required for cloud PostgreSQL
  },
});

module.exports = pool;