
// write code to connect to cockroachdb
const { Pool, Client } = require('pg');
require('dotenv').config();

const client = new Client({
      user: process.env.CRDB_USER,
      host: process.env.CRDB_HOST,
      database: process.env.CRDB_DATABASE,
      password: process.env.CRDB_PASSWORD,
      port: process.env.CRDB_PORT,
      ssl: process.env.CRDB_SSL === "true" ? true : false
});

// read data from table
(async () => {
    const a = await client.connect();
    client.query('SELECT 1', (err, res) => {
        if (err) throw err
        console.log(res.rows)
        console.table(res.rows);
        result = res.rows
    }
    )


})().catch((err) => console.log(err.stack));

let result
client.query('SELECT * FROM bank.accounts', (err, res) => {
    if (err) throw err
    console.log(res.rows)
    console.table(res.rows);
    result = res.rows
}
)

//client.end()


