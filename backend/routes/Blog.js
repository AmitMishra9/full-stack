const express = require('express');
const router = express.Router();

const fileuploadMiddlewares = require("../middlewares/fileuploadMiddlewares");
const blogController = require('../controllers/Blog');



router.get("/getBlogList", blogController.getBlogList);
router.post("/createBlog",fileuploadMiddlewares,blogController.createBlog);
router.patch("/editBlog", blogController.editBlog);
router.delete("/deleteBlog", blogController.deleteBlog);

module.exports = router;
