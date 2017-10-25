const { authenticate } = require('feathers-authentication').hooks;
const { associateCurrentUser } = require('feathers-authentication-hooks');
const Hashids = require('hashids');
const hashids = new Hashids('initiatio');        


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      associateCurrentUser(),
      (hook)=>{
        hook.data.code = hashids.encode(Date.now());
        return hook;
      }
    ],
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
