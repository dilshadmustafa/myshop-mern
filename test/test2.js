const { Pool } = require("pg");
require('dotenv').config();

// Run the transactions in the connection pool
(async () => {
    const connectionString = process.env.CRDB_URI;
    const pool = new Pool({
      connectionString,
      application_name: "test2",
    });

// Connect to database
const client = await pool.connect();

let result
client.query('SELECT * FROM bank.accounts', (err, res) => {
    if (err) throw err
    console.log(res.rows)
    console.table(res.rows);
    result = res.rows
}
)
})().catch((err) => console.log(err.stack));
 