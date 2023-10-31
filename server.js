const express = require("express");

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

const data =require("./data/weather.json");

function findCityByWeather () {
  return data.find(())
}

app.get("/weather", (request, response) => {
  const weather = cityWeather(request.query.lat.lon)
  response.json(weather);
});


