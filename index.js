const { fetchBreedDescription } = require('./breedFetcher');

const input = process.argv[2];

fetchBreedDescription(input, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});