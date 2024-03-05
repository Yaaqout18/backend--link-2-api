const foreCast = require("./data/forecast");
const geoCode = require("./data/geocode");

const country = process.argv[2];
geoCode(country, (error, data) => {
  console.log("Error : ", error);
  console.log("Data : ", data);

  foreCast(data.latitude, data.longtitude, (error, response) => {
    console.log("Error : ", error);
    console.log("Location : ", response);
  });
});
