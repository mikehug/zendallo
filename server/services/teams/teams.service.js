// Initializes the `teams` service on path `/teams`
const createService = require('feathers-mongodb');
const hooks = require('./teams.hooks');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/teams', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('teams');

  mongoClient.then(db => {
    service.Model = db.collection('teams');
  });

  service.hooks(hooks);
};
