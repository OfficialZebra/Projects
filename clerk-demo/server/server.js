const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Enable All CORS Requests
app.use(cors());

//bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// imports the connections component
require("./connections/mongoConnection")
const { blogPostModel } = require("./models/blogModel")

app.get('/', (req, res) => {
    res.send('I am the roote route for the server')
})

// CREATE
// 1) POST Route 
app.post("/postBlog", (req, res) => {
    const blogPost = req.body

    blogPostModel.create(blogPost)
    .then(result => {
        console.log(result);
        res.json(result)
        //saves the result and sends it to the browser
    })
    .catch(err => {
        console.log("Error POSTing blog data to db: ", err);
        res.status(400).json({ message: "Unable to add blog data to db at this time" })
    })  
})

// READ
// 2) READ Route
app.get("/getBlogs", (req, res) => {
    const userId = req.query.userId;

    blogPostModel.find({userId})
    .then(results => {
        if (results.length === 0) {
            res.json({ message: "You don't have any data!" })
        } else {
            res.json(results)
        }
        // returns the data. If the data is less than 0, then it tells you your data is missing, otherwise it will return your data
    })
    .catch(err => {
        console.log("Error GETting blog data from db: ", err);
        res.status(400).json({ message: "Unable to get blog data from db at this time" })
    })
})


app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })