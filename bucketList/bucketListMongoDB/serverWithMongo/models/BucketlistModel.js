const mongoose = require('mongoose')

// define a bookSchema, it's a blueprint
const bucketListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    isComplete: Boolean
});

// define a BookModel which is an object that our
// code can work with
const BucketListModel = mongoose.model(
    //name of themongo collection
    'bucketlist',
    // the pattern / blueprint to use when reading/writing to the db
    bucketListSchema)

// export it so the app can use it.
module.exports = BucketListModel
