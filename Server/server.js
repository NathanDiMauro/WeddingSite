const express = require('express');
const countDown = require('./lib/countDown').countdown;
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/countdown', (req, res) => {
  res.send(countDown());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})