const express = require("express");
const router = express.Router();

router.get("/about", function(req, res) {
  res.send("Welcome to Progressive Webapp");
});

module.exports = router;
