const request = require("request");

const geocode = (address, callback) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYXJyb3cxMTI0IiwiYSI6ImNrYWk2cTBwOTBtbjYycWxscDdia2d6ZXYifQ.4Sf7-UxvwouVKTAaKtkt9w&limit=1`;

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the services!", undefined);
    } else if (!response.body.features || response.body.features.length === 0) {
      callback("No such location found!", undefined);
    } else {
      const longitude = response.body.features[0].geometry.coordinates[0];
      const latitude = response.body.features[0].geometry.coordinates[1];
      const location = response.body.features[0].place_name
      callback(undefined, { longitude: longitude, latitude: latitude, location: location });
    }
  });
};

module.exports = geocode;
 