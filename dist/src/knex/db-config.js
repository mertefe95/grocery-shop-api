"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knexfile_1 = require("../../knexfile");
const pg_1 = __importDefault(require("pg"));
const PG_DECIMAL_OID = 1700;
const PG_INT8_OID = 20;
pg_1.default.types.setTypeParser(PG_DECIMAL_OID, parseFloat);
pg_1.default.types.setTypeParser(PG_INT8_OID, parseInt);
const env = process.env.NODE_ENV || 'development';
module.exports = { knex: knex(knexfile_1.knexConfig[env]) };
//# sourceMappingURL=db-config.js.map