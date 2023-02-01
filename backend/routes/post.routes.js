const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  editPost,
  getPostByid,
  deletePost,
} = require("../controller/post.controller");
const uploadMulter = require("../config/multer/multer.config");
const {validatePost} = require('../models/joiValidations')

router.get("/", getPosts);
router.post("/:id", [uploadMulter.single("image"),validatePost], createPost);
router.patch("/:id", [uploadMulter.single("image")], editPost);
router.get("/:id", getPostByid);
router.delete("/:id", deletePost);

module.exports = router;
