const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, res, body) => {

    if (error) {
      callback(`${breedName}: NOT FOUND.`);
    }

    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`${breedName}: NOT FOUND.`);
    }
  });

};

module.exports = { fetchBreedDescription };