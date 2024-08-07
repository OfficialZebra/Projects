// load up the .env file
require('dotenv').config();
// import the libraries
const express = require('express');
const cors = require('cors');
// create the express app object
const app = express();
// create PORT
const PORT = process.env.PORT || 3000;
//const http = require('http');

//Bring in our DB connection
const pgClient = require('./connections/pgConnection')

// create middleware that allows us to read the body
//.json() translates the incoming base64 data through the body, into json
app.use(express.json())
//?description=MeetZ%20the%20Person --> js object, urlencoded()
app.use(express.urlencoded({ extended: true }))
// allow any browser to access our API
//this server is open for business
//we will deal with CORS security later
app.use(cors())

// root route
app.get('/', function (req, res) {
    res.send('You have reached the BucketList API running on port ' + PORT)
})



// CREATE
app.post('/bucket', function (req, res) {
    // STEPS:
    // 0. Check for valid input
    if (!req.body.description || (typeof req.body.description) !== 'string') {
        res.status(400).json({
            error: "Need a valid description as a string!!"
        })
    }
    let query = `
    INSERT INTO
    jan_2024.items (user_id, description)
    VALUES (4, '${req.body.description}') RETURNING *
    `
    pgClient.query(query)
        .then(function (data) {
            res.json(data.rows[0])
        })
        .catch(err => res.status(400).json({ ok: false, message: 'Error: not posted to db ', err }))
})


// READ
app.get('/bucket', function (req, res) {
   
let query = `
SELECT * 
FROM jan_2024.items
WHERE user_id = 4
ORDER BY item_id;`

        pgClient.query(query)
        .then(function (data) {
            res.json(data.rows)
        })
        .catch(function (err) {
            res.status(400).json(err)
        })
})


// UPDATE
//PUT - UPDATE
app.put('/bucket/:id', function (req, res) {
    // 1. Find the id
    let requestedId = parseInt(req.params.id);
    
    let query = `
    UPDATE jan_2024.items
    SET is_complete = NOT is_complete
    WHERE item_id = ${requestedId}
    RETURNING *;`

    pgClient.query(query)
    .then(function(updatedDoc){
        // 5. send it back to the frontend client
        res.json(updatedDoc.rows[0])
    })
    .catch(function(err){
        res.status(400).json({
            ok: false, 
            message: "Error: Save to DB failed",
            error: err})
    })
})



// DELETE
app.delete('/bucket/:id', (req, res) => {
    // 1. find the id
    const requestedId = req.params.id;
   
    let query = `
    DELETE FROM jan_2024.items
    WHERE item_id = ${requestedId}
    RETURNING *;`
    pgClient.query(query)
    .then(data => {
        res.json({
            ok: true,
            message: "Success: Document Deleted",
            data
        })
    })
        .catch(function (err) {
            res.status(400).json({
                ok: false,
                message: "Error: find the doc and delete failed",
                error: err
            })
        })
  
})
// const server = http.createServer(app);
// // start the express listener
// server.listen(function () {
//     console.log(`Bucketlist API started on port ${server.address().port}`)
// })

app.listen(PORT, function() {
    console.log(`Bucketlist API started on port ${PORT}`)
})
