import {
  getDatesForDay,
  getImage,
  getMonthAvailability,
  getShopData,
  postReservation,
} from './src/controllers/index.js';

import cors from 'cors';
import express from 'express';

const app = express();

const server = app.listen(3000, (req, res) => {
  console.log(
    `Server listens at port: ${server.address().port}. Full url: http://localhost:${server.address().port}`,
  );
});

// Fetces static data from public folder
app.use(express.static('public'));
// Can accept json requests
app.use(express.json());
// Accepts data from everywhere - TODO Refactor it to accept only from specific places
app.use(
  cors({
    origin: [
      'http://localhost:5173', //<- The url of the frontend in the localhost app
      'some-other-environment', //<- TODO - Change it to the url that the frontend is hosted when you host the FE app
    ], // allowed origins
  }),
);

// Fetches images
app.get('/api/img', (req, res) => {
  const image = getImage(req);

  return res.json(image);
});

//Fetches shop data for the shop
app.get('/api/getShopData', (req, res) => {
  const getShopDataRes = getShopData(req);
  res.json(getShopDataRes);
});

// For a specific month it fetches available data
app.get('/api/month', (req, res) => {
  const dates = getMonthAvailability(req);

  res.json(dates);
});

// For a sppecific date it fetches the hours for the specific day
app.get('/api/day', (req, res) => {
  const dates = getDatesForDay(req);

  res.json(dates);
});

// Saves reservation details
app.post('/api/save', (req, res) => {
  const dataToSave = { ...req.body };
  const dbResponse = postReservation(dataToSave);
  // sends an email to the user.
  res.send(dbResponse);
});

//
app.use((req, res) => {
  res.status(400).send('Endpoint is not available');
});
