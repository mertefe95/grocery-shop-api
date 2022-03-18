import type { Knex } from "knex";
import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv/config'


// Update with your config settings.

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: '127.0.0.1',
      database: 'grocery_shop',
      user: 'postgres',
      password: 'Efemert9595', //process.env.LOCAL_DB_PASSWORD,
      charset: 'utf8',
      timezone: 'utc',
    },
    migrations: {
      directory: path.join(__dirname,  'knex', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'knex', 'seeds'),
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default knexConfig;
