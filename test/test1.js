
// write code to connect to cockroachdb
const { Pool, Client } = require('pg');
const client = new Client({
      user: 'root',
      host: 'localhost',
      database: 'defaultdb',
      password: '',
      port: 26257,
      ssl: false
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


