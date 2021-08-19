const axios = require('axios');

const categoryAPI = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async () => {
  const list = await axios.get(categoryAPI).then(({ data }) => data);

  return list;
};

module.exports = {
  getCategories,
};
