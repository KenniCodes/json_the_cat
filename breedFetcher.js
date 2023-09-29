const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';
const clArgs = process.argv.slice(2);
const breedName = clArgs[0];

if (!breedName) {
  console.log("Please input a breed name.");
  return;
}

request(`${apiUrl}?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(`Status Code: `, response.statusCode);
    console.log(`Error message:`, error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length > 0) {
    const description = data[0].description;
    console.log(`Status Code: `, response.statusCode);
    console.log(`${breedName} description: ${description}`);
  } else {
    console.log(`Status Code: `, response.statusCode);
    console.log(`No data found, please check ${apiUrl} or ${breedName}`);
  }
});
