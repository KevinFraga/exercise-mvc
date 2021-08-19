const express = require('express');

const app = express();

const Joke = require('./controller/joke');

app.set('view engine', 'ejs');

app.set('views', './view');

app.use('/joke', Joke);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
