const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:gamertag", async (req, res) => {
  try {
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY
    };
    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile${platform}/${gamertag}`,
      headers
    );
  } catch (err) {
    console.error(error);
  }
});

module.exports = router;
