//import CrDbPool from "./CrDbPool";
const { CrDbPool } = require("./crdbpool");
// Run the transactions in the connection pool
(async () => {
    const pool = new CrDbPool().getPool();
    const pool2 = new CrDbPool().getPool();

    if (pool === pool2)
        console.log("Same pool");

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
 




