const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, queryWithCurrentUser } = require('feathers-authentication-hooks');
const { required, unless } = require('feathers-hooks-common');
const Hashids = require('hashids');
const hashids = new Hashids('initiatio');        


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [unless(context => context.params.query.code, queryWithCurrentUser())],
    get: [],
    create: [
      associateCurrentUser(),
      (hook)=>{
        hook.data.code = hashids.encode(Date.now());
        return hook;
      }
    ],
    update: [
      (hook)=>{
        if(hook.data['$push'] && hook.data['$push'].activity ){
          hook.data['$push'].activity.dateTime = new Date();
          hook.data['$push'].activity.userId = hook.params.user._id;
        }
        return hook;
      }
    ],
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
