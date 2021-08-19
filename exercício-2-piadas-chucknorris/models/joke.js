const axios = require('axios');

const jokeRandomAPI = 'https://api.chucknorris.io/jokes/random';

const getRandomJoke = () => axios.get(jokeRandomAPI).then(({ data }) => data.value);

const getCategoryJoke = (cat) => axios.get(`${jokeRandomAPI}?category=${cat}`).then(({ data }) => data.value);

module.exports = {
  getRandomJoke,
  getCategoryJoke,
};
