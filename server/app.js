const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const { iff } = require('feathers-hooks-common');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const httpsRedirect = require('express-https-redirect');

const authentication = require('./authentication');
const authManagement = require('feathers-authentication-management');
const auth = require('feathers-authentication');


const mongodb = require('./mongodb');

const app = feathers();

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', feathers.static(app.get('public')))
// Return index to handle different routes  
  .get('*', function (req, res) {
    res.sendFile(path.join(app.get('public'), 'index.html'));
  });
//Redirect all traffic to SSL except at localhost 
app.use('/', httpsRedirect());
// Set up Plugins and providers
app.configure(hooks());
app.configure(mongodb);
app.configure(rest());
app.configure(socketio({
  wsEngine: 'uws'
}));

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
app.configure(authManagement());
const isAction = (...args) => hook => args.includes(hook.data.action);
app.service('authManagement').before({
  create: [
    iff(isAction('passwordChange', 'identityChange'), auth.hooks.authenticate('jwt')),
  ],
});
// Set up our services (see `services/index.js`)
app.configure(services);
// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;
