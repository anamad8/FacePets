const express = require("express");
const router = express.Router();
const { EmailSender} = require('../controller/email.controller')



router.post('/', EmailSender)

module.exports = router;