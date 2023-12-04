// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'mysql',
    connection: {
      // ConnectionString: process.env.CONNECTIONSTRING,
      host:  process.env.HOST,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      ssl: true 
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./src/data/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      ConnectionString: process.env.CONNECTIONSTRING,
      host:  process.env.HOST,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      ssl: true 
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./src/data/migrations'
    }
  },

  production: {
    connection: {
      ConnectionString: process.env.CONNECTIONSTRING,
      host:  process.env.HOST,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      ssl: true 
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./src/data/migrations'
    }
  }

};
