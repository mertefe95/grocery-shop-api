export {}
import knexConfig from '../knexfile';
import { knex} from 'knex';
import pg from 'pg';


const PG_DECIMAL_OID = 1700;
const PG_INT8_OID = 20;

pg.types.setTypeParser(PG_DECIMAL_OID, parseFloat);
pg.types.setTypeParser(PG_INT8_OID, parseInt);

const env = process.env.NODE_ENV || 'development';

export default knex(knexConfig[env]);
