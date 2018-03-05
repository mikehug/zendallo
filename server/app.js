const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const configuration = require('@feathersjs/configuration');
const rest = require('@feathersjs/express/rest');
const socketio = require('@feathersjs/socketio');

const handler = require('@feathersjs/express/errors');
const notFound = require('feathers-errors/not-found');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const httpsRedirect = require('express-https-redirect');

const authentication = require('./authentication');
const authManagement = require('feathers-authentication-management');

const mongodb = require('./mongodb');
const channels = require('./channels');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('client'), 'favicon.ico')));

// Host the public folder

app.use('/app', express.static(app.get('client')));
app.get('/app/*', function(req, res) {
  res.sendFile(path.join(app.get('client'), 'index.html'));
});

app.use('/', express.static(app.get('public')));
app.get('*', function(req, res) {
  res.sendFile(path.join(app.get('public'), 'index.html'));
});

// app.use('/app/', express.static(app.get('app')))
// // Return index to handle different routes
//   .get('/app/*', function (req, res) {
//     res.sendFile(path.join(app.get('app'), 'index.html'));
//   });
//Redirect all traffic to SSL except at localhost
app.use('/', httpsRedirect());
app.configure(mongodb);
app.configure(rest());
app.configure(
  socketio({
    wsEngine: 'uws'
  })
);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
app.configure(authManagement());

// Set up our services (see `services/index.js`)
app.configure(services);

// before `app.configure(services)`
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;
