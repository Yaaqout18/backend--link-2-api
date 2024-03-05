const request = require("request");

const geoCode = (address, callback) => {
  const geoCodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw";

  request({ url: geoCodeUrl, json: true }, (error, data) => {
    if (error) {
      callback("unable to connect geocode service", undefined);
    } else if (data.body.message) {
      callback(data.body.message, undefined);
    } else if (data.body.features.length == 0) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined, {
        logtitude: data.body.features[0].center[0],
        latitude: data.body.features[0].center[1],
      });
    }
  });
};

module.exports = geoCode;
