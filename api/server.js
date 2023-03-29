const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser"),
      port = 3080;
const expressionsFile = 'expressions.json';
const fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/dist')));

app.get('/api/expressions', (req, res) => {
  let expressions = readJson();
  if (req.query.q) {
    expressions = expressions.filter(exp => {
      const query = req.query.q.toLowerCase()
      if (
        exp.expression.find(e => e.expression.toLowerCase().includes(query))
        || exp.expressionEq.find(e=>e.expression.toLowerCase().includes(query))
      ) {
        return exp
      }
    });
  }
  res.json(expressions)
});

app.post('/api/expression', (req, res) => {
  const expression = req.body;
  let expressions = readJson();
  if (expressions.length) {
    expressions = expressions.filter(exp => exp.id !== expression.id);
  }
  expressions.push(expression);
  if (setTimeout(() => writeJson(expressions), 1)) {
    res.json(expressions);
  }
});

function readJson() {
  if (fs.existsSync(expressionsFile)) {
    return JSON.parse(fs.readFileSync(expressionsFile, { encoding: 'utf8' }));
  } else {
    return [];
  }
}

function writeJson(expressions) {
  let data = JSON.stringify(expressions);
  fs.writeFileSync(expressionsFile, data, { encoding: 'utf8' }, function (err) {
    return !err;
  });
}

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});