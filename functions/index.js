'use strict';

const functions = require('firebase-functions');

const fastify = require('./fastify');
exports.greetFromFastify = functions.https.onRequest(fastify);

const express = require('./express');
exports.greetFromExpress = functions.https.onRequest(express);

const restify = require('./restify');
module.exports.greetFromRestify = functions.https.onRequest(
  restify._onRequest.bind(restify)
);
