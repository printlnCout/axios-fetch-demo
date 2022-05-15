const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Method", 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", 'X-Requested-With');
  res.header("Access-Control-Allow-Headers", 'Content-Type');
  next();
});

app.get('/book/:id', (req, res) => {
  res.send({
    query: req.query,
    params: req.params,
  })
});

app.post('/name/:id', (req, res) => {
  res.send({
    query: req.query,
    body: req.body,
    params: req.params,
  });
});

app.listen(3000);