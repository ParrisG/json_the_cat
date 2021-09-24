const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //Edge Case: Request Failed
    if (error) {
      callback(error, null);
      return;
    }
    //Edge Case: Breed name not found
    if (body.length === 2) {
      callback("Breed Not Found", null);
      return;
    }
    //console.log(body);

    //console.log('statusCode: ', response && response.statusCode);
    //console.log('body: ', body);
    const data = JSON.parse(body);
    callback(null, data[0].description);
    return;
  });
};

module.exports = { fetchBreedDescription };








// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body) => {
//   //Edge Case: Request Failed
//   if (error) {
//     console.log('error: ', error);
//     return;
//   }
//   //Edge Case: Breed name not found
//   if (body.length === 2) {
//     console.log("Breed Not Found");
//     return;
//   }
//   console.log(body);

//   //console.log('statusCode: ', response && response.statusCode);
//   //console.log('body: ', body);
//   const data = JSON.parse(body);
//   console.log("Data: ", data);


//   // //Edge Case: Breed name not found (this is another way of doing this)
//   // if (data[0] === undefined) {
//   //   console.log(`${breed} not found. Check spelling and try again!`);
//   //   return;
//   // }
//   console.log(data[0].description);
// });

