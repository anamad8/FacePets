const express = require("express");
const router = express.Router();
const { createComment, getComment, editComment, getCommentByid, deleteComment } = require('../controller/comment.controller')
const uploadMulter = require("../config/multer/multer.config");
const {validateComment} = require('../models/joiValidations')

router.get("/", getComment);
router.post("/:id1/:id2", [uploadMulter.single("image"), validateComment], createComment);
router.patch("/:id", [uploadMulter.single("image")], editComment);
router.get("/:id", getCommentByid);
router.delete("/", deleteComment);

module.exports = router;