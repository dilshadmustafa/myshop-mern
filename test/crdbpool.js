const { Pool } = require("pg");

class CrDbPool {

    static #instance = null;

    constructor() {
        if (CrDbPool.#instance instanceof CrDbPool)
            return CrDbPool.#instance;

        const connectionString = "postgresql://root@localhost:26257/defaultdb?sslmode=disable";
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

module.exports = {
    CrDbPool
};













