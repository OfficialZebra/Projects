// BLUEPRINTS
// Schema
const mongoose = require("mongoose")
const blogPostSchema = mongoose.Schema({
    title: {
        type: String,
        minLength: 1,
        maxLength: 50,
        required: [true, 'Title is required']
    },
    author: {
        type: String,
        minLength: 1,
        maxLength: 30,
        required: [true, "Author is required"]
    },
    description: {
        type: String,
        minLength: 1,
        maxLength: 1000,
        required: [true, "Description is required"]
    },
    userId: {
        type: String,
        required: true
    }
});

// Model
// defines the collection and which schema to use
exports.blogPostModel = mongoose.model("blogs", blogPostSchema)