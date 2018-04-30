// Initializes the `mailer` service on path `/mailer`
const hooks = require('./mailer.hooks');
const Mailer = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {
  
  app.use('/mailer', Mailer(smtpTransport({
    host: 'email-smtp.eu-west-1.amazonaws.com',
    secure: true,
    auth: {
      user: app.get('smtpUser'),
      pass: app.get('smtpPass')
    }
  })));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mailer');

  service.hooks(hooks);
};
