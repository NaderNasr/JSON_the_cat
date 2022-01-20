const request = require('request');
const input = process.argv.slice(2);
const breedName = input;

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (breedName.length <= 0) {
    console.log(`Error: ${error} please add a breed name`);
  }
  if (error) {
    console.log(`${breedName} not available please try again`);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);

});