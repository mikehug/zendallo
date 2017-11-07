// Initializes the `sessions` service on path `/sessions`
const createService = require('feathers-mongodb');
const hooks = require('./sessions.hooks');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/sessions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sessions');

  mongoClient.then(db => {
    service.Model = db.collection('sessions');
  });

  service.hooks(hooks);

  service.publish((data, hook) => {
  // Here you can add event publishers to channels set up in `channels.js`
  // To publish only for a specific event use `app.publish(eventname, () => {})`

  
    // if(data._id.toString() !== connection.user.currentSession.toString() ) {
    //   return false;
    // }

    // publish all service events to all authenticated users users
    return app.channel('authenticated');
  });
};
