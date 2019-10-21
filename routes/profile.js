const express = require("express");
const router = express.Router();

router.get("/:platform/:gamertag", (req, res) => {
  console.log(req.params.platform, req.params.gamertag);
  console.log(req);
  res.send("Hello");
});

module.exports = router;
