const { Client } = require('pg');

//Destructure our credentials for Postgres
const { HOSTNAME, DATABASE, DATABASEPORT, USERNAME, PASS} = process.env

//Build our connection object
const connObj = {
    host: HOSTNAME, 
    database: DATABASE,
    port: DATABASEPORT,
    user: USERNAME,
    password: PASS
}

//Connect to our DB
const pgClient = new Client(connObj)

pgClient.connect()
    .then(()=> console.log(`Connected to DB: ${DATABASE}`)) 
    .catch((err) => console.log(`Trouble connecting to Database`, err))

    //Export to use in server.js
    module.exports = pgClient;
    
