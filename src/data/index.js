import KnexFile from './knexfile.js'
import knex from 'knex'


export default knex(KnexFile["development"]);
