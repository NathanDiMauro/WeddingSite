const express = require('express');
const path = require('path');
const cors = require('cors');

const countDown = require('./lib/countDown').countdown;

const app = express();
const port = 5000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors({
    origin: '*'
}));

app.get('/api/countdown', (req, res) => {
  res.send(countDown());
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'../client/build/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})