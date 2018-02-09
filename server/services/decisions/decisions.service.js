// Initializes the `decisions` service on path `/decisions`
const createService = require('feathers-mongodb');
const hooks = require('./decisions.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/decisions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('decisions');

  mongoClient.then(db => {
    service.Model = db.collection('decisions');
  });

  service.hooks(hooks);
};
