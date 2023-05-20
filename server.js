const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Travel Agency QA1 enviornment is up now </h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});