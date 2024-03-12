const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../files'));
    },
    filename: (req, file, cb) => {
      //  console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const limits = {
    fileSize: 1000000
};

// const upload= async (req,res,next)=>{
//    try {
//       const response= await multer({ storage, limits })
//       console.log("middle Where respond+",response);
//        next();
//    } catch (error) {
//        console.error(error.message)
//    }   
// }.single('image');
const upload = multer({ storage, limits}).single('image');

module.exports = upload;
