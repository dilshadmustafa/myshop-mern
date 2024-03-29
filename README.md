Welcome to MyShop
=================
Introduction
-------------

**MyShop** is an eCommerce Web App built using React, Redux, Node.js MERN stack. It implements Security, Authentication, Authorization, Payment Gateway, Inventory Management, Order Management, and User Management.

> **Security Features:**

sops/age tool is used to secure secrets, passwords, API keys, database connection string, etc. by encrypting those values.

Usually .env file contains these secrets. You cannot find .env file anywhere in this repository as it's created by sops/age tool only inside the secure server instance after decrypting .env.age file. This is done by init.sh script. Ofcourse this will work only with your SSH private key.

**init.sh script**
                    
                age -d -i ~/.ssh/id_ed25519 .env.age > .env
                
Also when pushing code to git repo, .env file will not be pushed to repo. Sops/age tool is used to encrypt .env file to .env.age file and only encrypted file is stored. This is done by gitpush.sh script.

**gitpush.sh script**
                    
                age -R ~/.ssh/id_ed25519.pub .env > .env.age
                git add .
                git commit -m "$1"
                git push

Also in .gitignore file there is an entry to ignore .env files. So git push will not push those files to git repo. Also for additional security, the git repo can be made into private repository only accessible by your organization.

**.gitignore file**

                .env

> **Authentication Features:**

Authentication using JWT.

> **Multiple Back-end Database Options:**

The code can be ported to various database back-end options like Postgres, MySQL, CockroachDB, Firebase and Supabase. An example connection pool implementation is provided for CockroachDB which is pgwire compatible with Postgres database.

**Postgres/CockroachDB Connection Pool crdbpool.js**

```
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
```
License
-------------

Copyright (c) Dilshad Mustafa 2024.

Mozilla Public License Version 2.0

https://www.mozilla.org/en-US/MPL/2.0/

Please Support This Project
---------------------------
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H4V87SN5M2GG2)
