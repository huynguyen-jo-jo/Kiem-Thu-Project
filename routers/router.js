const express = require('express')
const multer = require('multer');
const HomeController = require('../controller/HomeController')
const PostController = require('../controller/PostController');
const SearchController = require('../controller/SearchController');
const router = express.Router()


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
 
var upload = multer({ storage: storage });

router.get('/home', HomeController.getHome)

router.get('/post/write', PostController.getWrite)
router.get('/:id', PostController.getPost)

router.post('/post/uploads', upload.single('image'), PostController.postUploas)

router.post('/hashtag', SearchController.getPost)



module.exports = router