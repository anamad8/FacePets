const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  login,
  updateUser,
  getByidUser,
  getUserPost,
  updateBanner
} = require("../controller/user.controller");
const uploadMulter = require("../config/multer/multer.config");
const {validateUser} = require('../models/joiValidations')

router.get("/", getUser);

router.post("/", [uploadMulter.single("image"),validateUser], createUser);
router.post("/login", login);
router.patch("/:id",[uploadMulter.single("image")], updateUser);
router.patch("/banner/:id",[uploadMulter.single("imageBanner")], updateBanner);

router.get("/:id", getByidUser);
router.get("/userPost/:id", getUserPost);

module.exports = router;
