'use strict';

const http = require('http');
const Fastify = require('fastify');

let handleRequest = null;

/*
  var server
  const httpHandler = router.lookup.bind(router)
  if (options.serverFactory) {
    server = options.serverFactory(httpHandler, options)
  } else if (options.https) {
    if (options.http2) {
      server = http2().createSecureServer(options.https, httpHandler)
    } else {
      server = https.createServer(options.https, httpHandler)
    }
  } else if (options.http2) {
    server = http2().createServer(httpHandler)
  } else {
    server = http.createServer(httpHandler)
  }
 */
const serverFactory = (handler, opts) => {
  handleRequest = handler;
  console.log('server factory opts: %j', opts);
  return http.createServer();
};
const fastify = Fastify({
  serverFactory,
  logger: true
});

fastify.get('/get', (req, reply) => {
  reply.send('[Fastify] Response from GET request');
});

fastify.post('/post', (req, reply) => {
  reply.send('[Fastify] Response from POST request');
});

module.exports = (req, res) => {
  req = Object.assign({ip: ''}, {...req});
  fastify.ready(err => {
    if (err) throw err;
    handleRequest(req, res);
  });
};
