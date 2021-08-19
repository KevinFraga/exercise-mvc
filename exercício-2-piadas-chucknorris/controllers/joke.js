const express = require('express');

const Joke = require('../models/joke');

const router = express.Router();

router.get('/', async (_req, res) => {
  const joke = await Joke.getRandomJoke();

  res.status(200).render('./jokes', { joke });
});

router.get('/:category', async (req, res) => {
  const { category } = req.params;

  const joke = await Joke.getCategoryJoke(category);

  res.status(200).render('./jokes', { joke });
});

module.exports = router;
