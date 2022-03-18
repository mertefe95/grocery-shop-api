"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// Update with your config settings.
const knexConfig = {
    development: {
        client: "pg",
        connection: {
            host: '127.0.0.1',
            database: 'mert-book-application',
            user: 'postgres',
            password: process.env.LOCAL_DB_PASSWORD,
            charset: 'utf8',
            timezone: 'utc',
        },
        migrations: {
            directory: path_1.default.join(__dirname, 'database', 'knex', 'migrations'),
        },
        seeds: {
            directory: path_1.default.join(__dirname, 'database', 'knex', 'seeds'),
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
exports.default = knexConfig;
//# sourceMappingURL=knexfile.js.map