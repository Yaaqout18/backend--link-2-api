const request = require("request");

const foreCast = (latitude, longtitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=ae9cd116c239407fb8e72340240503&q=" +
    latitude +
    "," +
    longtitude;

  request({ url, json: true }, (error, data) => {
    if (error) {
      callback("unable to connect weather API Service ", undefined);
    } else if (data.body.error) {
      callback(data.body.error.message, undefined);
    } else {
      callback(
        undefined,
        data.body.location.name +
          "  -it is : " +
          data.body.current.condition.text +
          "  & temp is : " +
          data.body.current.temp_c
      );
    }
  });
};

module.exports = foreCast;
