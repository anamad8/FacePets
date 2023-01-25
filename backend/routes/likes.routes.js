const express = require("express");
const router = express.Router();
const {
    deleteLikeComment,
    deleteLikePost,
    createLikeComment,
    createLikePost
} = require("../controller/likes.controller");



router.post("/post/:id/:id2", createLikePost);

router.delete("/post/:id", deleteLikePost);

router.post("/comment/:id/:id2", createLikeComment);

router.delete("/comment/:id", deleteLikeComment);

module.exports = router;