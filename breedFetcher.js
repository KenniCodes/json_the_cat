const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (breedName, callback) => {
  request(`${apiUrl}?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
      return callback(null, data[0].description);
    } else {
      return callback("Breed not found", null);
    }
  });
};

module.exports = {
  fetchBreedDescription
};