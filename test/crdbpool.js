require('dotenv').config();
const { Pool } = require("pg");

class CrDbPool {

    static #instance = null;

    constructor() {
        if (CrDbPool.#instance instanceof CrDbPool)
            return CrDbPool.#instance;

        const connectionString = process.env.CRDB_URI;
        this.pool = new Pool({
          connectionString,
          application_name: "test2",
        });
        Object.freeze(this.pool);
        Object.freeze(this);
        CrDbPool.#instance = this;

    }

    getPool() {
        return this.pool;
    }
};

const crDbPool = new CrDbPool();

module.exports = {
    CrDbPool, crDbPool
};













