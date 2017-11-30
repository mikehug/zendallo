// Initializes the `sessionTokens` service on path `/session-tokens`
const createService = require('./session-tokens.class.js');
const hooks = require('./session-tokens.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'session-tokens',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/session-tokens', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('session-tokens');

  service.hooks(hooks);
};
