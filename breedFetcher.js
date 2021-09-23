const request = require('request');

const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body) => {
  //Edge Case: Request Failed
  if (error) {
    console.log('error: ', error);
    return;
  }
  //Edge Case: Breed name not found
  if (body[0].length === 0) {
    console.log("Breed Not Found");
    return;
  }


  //console.log('statusCode: ', response && response.statusCode);
  //console.log('body: ', body);
  const data = JSON.parse(body);

  //Edge Case: Breed name not found
  if (data[0] === undefined) {
    console.log(`${breed} not found. Check spelling and try again!`);
    return;
  }
  console.log(data[0].description);
});

