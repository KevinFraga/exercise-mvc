const express = require('express');

const Joke = require('../model/joke');

const router = express.Router();

router.get('/', async (_req, res) => {
  const joke = await Joke.getJoke();

  res.status(200).render('joke', { joke });
});

module.exports = router;
