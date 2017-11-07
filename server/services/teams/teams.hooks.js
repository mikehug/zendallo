const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser } = require('feathers-authentication-hooks');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [hook => {
      const { query = {} } = hook.params; 
      if (query._id) {
        query._id = new ObjectID(query._id);
      }
      if (query.userId) {
        query.userId = new ObjectID(query.userId);
      }
      return Promise.resolve(hook);
    }],
    get: [],
    create: [associateCurrentUser()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
