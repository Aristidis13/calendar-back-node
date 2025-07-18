import express from 'express';

const app = express();

app.listen(3000);

app.get('/api/getShopData', (req, res) => {
  const getShopData = {
    services: {},
  };
  res.json({ name: 'Aris', lastName: 'Barlos' });
});

app.get('/about', (req, res) => {
  res.send({ name: 'Aimilia', lastName: 'Spiliotopoulou' });
});

app.use((req, res) => {
  res.status(400).send('Cannot find page');
});
