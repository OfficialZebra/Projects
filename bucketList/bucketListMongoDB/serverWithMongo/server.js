// import the libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// load up the .env file
require('dotenv').config();

// create the express app object
const app = express();
// create PORT
const PORT = process.env.PORT || 3000;

// mongoose connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
    .then(function () {
        console.log('Success: Connected to MongoDB')
    })
    .catch(function () {
        console.log('Failure: could not connect to MongoDB')
    })


//get access to the MongoDB through the model
const BucketListModel = require('./models/BucketlistModel')


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
    // 1. get the body
    // Q. What data would you send to this route?
    let newItem = {
        description: req.body.description,
        isComplete: false
    }
    // 2. attach newItem to the array
    BucketListModel.create(newItem)
        .then(function (data) {
            res.json(data)
        })
        .catch(err => res.status(400).json({ ok: false, message: 'Error: not posted to db ', err }))
})


// READ
app.get('/bucket', function (req, res) {
    // get the bucket list items from db
    BucketListModel.find({})
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            res.status(400).json(err)
        })
})


// UPDATE
//PUT - UPDATE
app.put('/bucket/:id', function (req, res) {
    // 1. Find the id
    let newId = req.params.id;
    // 2. find the document
    BucketListModel.findById(newId)
.then(function(data){
    // 3. update the document
    data.isComplete = !data.isComplete;
    // 4. Save the document
    data.save()
    .then(function(updatedDoc){
        // 5. send it back to the frontend client
        res.json(updatedDoc)
    })
    .catch(function(err){
        res.status(400).json({
            ok: false, 
            message: "Error: Save to DB failed",
            error: err})
    })
})
.catch(function(err){
    res.status(400).json({
        ok: false,
        message: "Error: find the doc failed",
        error: err
    })
})
})



// DELETE
app.delete('/bucket/:id', (req, res) => {
    // 1. find the id
    const newId = req.params.id;
    // 2. make a find by id and delete call to the model
    BucketListModel.findByIdAndDelete(newId)
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

// start the express listener
app.listen(PORT, function () {
    console.log(`Bucketlist API started on port ${PORT}`)
})
// app.listen(3000, function (){
//     console.log(`Bucketlist API started on port:`)
// });