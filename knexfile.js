import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

export default {
	development: {
		client: 'mysql',
		connection: {
			host: process.env.DEV_DB_HOST,
			database: process.env.DEV_DB_DATABASE,
			user: process.env.DEV_DB_USER,
			password: process.env.DEV_DB_PASSWORD,
			ssl: process.env.DEV_DB_SSL === 'true',
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './src/data/migrations',
		},
	},

	staging: {
		client: 'mysql',
		connection: {
			host: process.env.STG_DB_HOST,
			database: process.env.STG_DB_DATABASE,
			user: process.env.STG_DB_USER,
			password: process.env.STG_DB_PASSWORD,
			ssl: process.env.STG_DB_SSL === 'true',
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './src/data/migrations',
		},
	},

	production: {
		connection: {
			host: process.env.PROD_DB_HOST,
			database: process.env.PROD_DB_DATABASE,
			user: process.env.PROD_DB_USER,
			password: process.env.PROD_DB_PASSWORD,
			ssl: process.env.PROD_DB_SSL === 'true',
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './src/data/migrations',
		},
	},
};
