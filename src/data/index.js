import KnexFile from '../../knexfile.js';
import knex from 'knex';

export default knex(KnexFile[process.env.NODE_ENV ?? 'development']);
