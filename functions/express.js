'use strict';

const express = require('express');

const app = express();

app.get('/get', (req, res) => {
  console.info('here is express');
  res.status(200).send('[Express] Response from GET request');
});

app.post('/post', (req, res) => {
  console.info('here is express');
  res.status(200).send('[Express] Response from POST request');
});

module.exports = app;
