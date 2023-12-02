
export default  {
    development: {
      client: 'mysql',
      connection: {
        ConnectionString: process.env.CONNECTIONSTRING,
        host:  process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        ssl: true 
      }
    }
}


 


 
