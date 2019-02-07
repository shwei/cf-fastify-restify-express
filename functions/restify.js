'use strict';

const restify = require('restify');

const server = restify.createServer();

server.use(
  restify.plugins.queryParser({
    mapParams: true
  })
);

server.get('/get', (req, res) => {
  res.send('[Restify] Response from GET request');
});

server.post('/post', (req, res) => {
  res.send('[Restify] Response from POST request');
});

module.exports = server;
