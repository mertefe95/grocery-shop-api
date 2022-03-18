"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knexfile_1 = __importDefault(require("../src/knexfile"));
const knex_1 = require("knex");
const pg_1 = __importDefault(require("pg"));
const PG_DECIMAL_OID = 1700;
const PG_INT8_OID = 20;
pg_1.default.types.setTypeParser(PG_DECIMAL_OID, parseFloat);
pg_1.default.types.setTypeParser(PG_INT8_OID, parseInt);
const env = process.env.NODE_ENV || 'development';
exports.default = knex_1.knex(knexfile_1.default[env]);
//# sourceMappingURL=db-config.js.map