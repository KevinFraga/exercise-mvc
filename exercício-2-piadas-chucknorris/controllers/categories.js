const express = require('express');

const Category = require('../models/categories');

const router = express.Router();

router.get('/', async (_req, res) => {
  const categories = await Category.getCategories();

  res.status(200).render('./categories', { categories });
});

module.exports = router;
