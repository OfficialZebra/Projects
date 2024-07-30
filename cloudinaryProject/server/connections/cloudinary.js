const cloudinary = require('cloudinary').v2;
const {CLOUD_NAME, API_KEY, API_SECRET} = process.env;

const config = {
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
}


//setup connection to cloudinary
cloudinary.config(config)

module.exports = cloudinary;