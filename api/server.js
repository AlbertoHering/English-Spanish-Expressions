const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const expressions = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/dist')));

app.get('/api/expressions', (req, res) => res.json(expressions));

app.post('/api/expression', (req, res) => {
  const expression = req.body;
  expressions.push(expression);
  res.json("expression addedd");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});