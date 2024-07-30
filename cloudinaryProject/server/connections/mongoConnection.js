require('dotenv').config()
const mongoose = require('mongoose');


const { MONGODB_URI} = process.env;

const connectionObj = {
    authSource: "admin",
    // user: DB_USER,
    // pass: DB_PASS
}

mongoose.connect(MONGODB_URI, {authSource: "admin"})
    .then(() => console.log(`Successfully Connected to DB:`))
    .catch((error) => console.log(`Error connecting to Database`, error))



    console.log(MONGODB_URI)