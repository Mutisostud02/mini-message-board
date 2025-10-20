const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSD,
    database: process.env.DB,
    port: process.env.DB_PORT
})
module.exports = pool;