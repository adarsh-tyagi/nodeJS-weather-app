const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=af626ec315a291aed56841cdc467a1e8&query=${latitude},${longitude}&units=m`;

  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to services", undefined);
    } else if (response.body.error) {
      callback("No report found for the location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is ${response.body.current.temperature} degree celsius out. The humidity is ${response.body.current.humidity}.`
      );
    }
  });
};

module.exports = forecast;
