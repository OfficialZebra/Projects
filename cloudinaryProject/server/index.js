require('dotenv').config()
const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors');
//cloudinary is a cloud service that provides 1.file upload, 
// 2. file store and 3. file serve function
//const cloudinary = require('cloudinary').v2;
const cloudinary = require('./connections/cloudinary')
const multer = require('multer');
//Mongo connection has been made
//happens when server starts
require('./connections/mongoConnection')

const PORT = process.env.PORT || 3000;
//Foundation

//Middleware
// Handles CORS - opens up to all requests from all clients
app.use(cors());


//multer aka upload
// const upload = require('./middleware/multer')
const storage = multer.diskStorage({
  destination : function(req, file, next){
    // 1. arg1 == error, here null
    // 2. arg2 == destination where the files shall be stored
    next(null, 'uploads/')
  },
  filename: function(req, file, next){
    // generate a unique name for the file (could use original name)
    const uniqueSuffix = Date.now();
    const extensionOfFile = path.extname(file.originalname);
    //orginal file name
    // cb(null, file.orginalname)
  next(null, file.fieldname + '-' + uniqueSuffix + extensionOfFile)
  }
})

//pass the storage config to multer
const upload = multer({storage})

//Bring in mongo connection
require('./connections/mongoConnection');

//DB Model
const Image = require('./models/Image'); // Import the Image model

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
      //Upload our image to cloudinary
      cloudinary.uploader.upload(req.file.path)
      .then(result => {
        return new ImageModel({imageUrl: result.secure_url})
      })
      .then(newImage => {
        // save the model to mongo
        return newImage.save()
      })
      .then(savedImageFromMongo => {
        console.log('savedImage is :', savedImageFromMongo)
        res.json(savedImageFromMongo)
      })
      .catch(err => { 
        console.log(err)
        res.status(500).json(
        {
          message: 'Cloudinary+MongoDB upload failed', 
          err: err
        }
      )})
});

//Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



