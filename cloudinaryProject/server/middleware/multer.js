// file receiving module on server
const multer = require('multer')
// file management module
const path = require('path')

const multerFunction = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file) => {
        let ext = path.extname(file.originalname)
        if(ext != '.jpg' && ext != '.png' && ext != '.jpeg') {
            throw new Error('Unsupported file type')
        } else {
            //do something else
            cb(null, true)
        }
    }
})

module.exports = multerFunction 

// module.exports = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req, file) => {
//         let ext = path.extname(file.originalname)
//         if (ext != '.jpg' && ext != '.png' && ext != '.jpeg') {
//             throw new Error('Unsupported file type')
//         } else {
//             //do something else
//             cb(null, true)
//         }
//     }
// })