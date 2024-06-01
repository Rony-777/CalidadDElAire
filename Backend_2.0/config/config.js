require('dotenv').config();

const config={
    env : process.env.NOD_ENV || 'dev',
    port : process.env.PORT || 4000,
    dbUser: process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    dbHost : process.env.DB_HOST,
    dbPort : process.env.DB_PORT,
    dbName : process.env.DB_NAMe,    
}

module.exports={config};