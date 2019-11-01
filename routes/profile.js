const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:game/:platform/:gamertag', async (req, res) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    };

    const { game, platform, gamertag } = req.params;

    // Use node-fetch to make a request to the third-party API
    const response = await fetch(
      `${process.env.TRACKER_API_URL}/${game}/standard/profile/${platform}/${gamertag}`,
      {
        headers
      }
    );

    // Convert response data to JSON format
    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: 'Profile Not Found'
      });
    }

    // Respond to client with JSON and passing in data from response
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
});

module.exports = router;
