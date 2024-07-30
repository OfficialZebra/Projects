require("dotenv").config()
// CONNECTION
const mongoose = require("mongoose");
const { URI, DB, DB_PASS, DB_USER } = process.env;
const url = `${URI}/${DB}`;

const connectionObj = {
    authSource: "admin",
    user: DB_USER,
    pass: DB_PASS,
};

mongoose
    .connect(url, connectionObj)
    .then(() => console.log(`Connected to ${DB} db`))
    .catch((err) => console.log(`Error connecting to ${DB} db:`, err));