const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ffc88ede31fd5b90a897752b150295e3&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find co-ordinates. Try another search", undefined);
    } else {
      const temperature = body.current.temperature + "°C";
      const humidity = body.current.humidity;
      const description = body.current.weather_descriptions[0];
      callback(undefined, { description, temperature, humidity });
    }
  });
};

module.exports = forecast;
