const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const publicPath = path.join(__dirname, "assets");

app.get('/', (req, res) => {
  res.send('<h1>Travel Agency QA1 enviornment is up now </h1>');
});

app.get('/dummy-assets', (req, res) => {
  res.sendFile(`${publicPath}/dummy.png`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});