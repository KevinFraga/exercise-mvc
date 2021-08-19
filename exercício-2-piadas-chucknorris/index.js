const express = require('express');

const app = express();

const Category = require('./controllers/categories');
const Joke = require('./controllers/joke');

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (_req, res) => {
  res.redirect('/categories');
});

app.use('/categories', Category);

app.use('/jokes', Joke);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
