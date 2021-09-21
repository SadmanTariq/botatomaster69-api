const express = require("express");
const router = express.Router();

const triggerResponse = require("./trigger-response");

router.use("/trigger-response", triggerResponse.router);

exports.router = router;