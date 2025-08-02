import cors from 'cors';
import { dirname } from './utils.js';
import express from 'express';
import getDatesForDay from './controllers/getDatesForDay.js';
import getImage from './controllers/getImage.js';
import getShopData from './controllers/getShopData.js';

const app = express();

const server = app.listen(3000, (req, res) => {
  console.log(
    `Server listens at port: ${server.address().port}. Full url: http://localhost:${server.address().port}`,
  );
});

app.use(express.static('public'));

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: dirname + '/pages/' });
});

app.get('/api/img', (req, res) => {
  const image = getImage(req);

  return res.json(image);
});

app.get('/api/getShopData', (req, res) => {
  const getShopDataRes = getShopData(req);
  res.json(getShopDataRes);
});

app.get('/api/day', (req, res) => {
  const dates = getDatesForDay(req);

  res.json(dates);
});

app.use((req, res) => {
  res.status(400).send('Cannot find page');
});

