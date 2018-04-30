const { authenticate } = require('@feathersjs/authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');
const verifyHooks = require('feathers-authentication-management').hooks;
const accountService = require('../../notifier');

const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id'
  })
];

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [...restrict],
    create: [
      hashPassword(),
      verifyHooks.addVerification()
    ],
    update: [...restrict, 
      commonHooks.disallow('external'), 
      hashPassword()
    ],
    patch: [...restrict, 
      commonHooks.iff(
        commonHooks.isProvider('external'),    
        commonHooks.preventChanges(
          'email',
          'isVerified',
          'verifyToken',
          'verifyShortToken',
          'verifyExpires',
          'verifyChanges',
          'resetToken',
          'resetShortToken',
          'resetExpires'
        )),
      hashPassword()
    ],
    remove: [...restrict]
  },

  after: {
    all: [
      // commonHooks.when(
      //   hook => hook.params.provider,
      //   commonHooks.discard('password')
      // ),
      protect('password')
    ],
    find: [],
    get: [],
    create: [
      context => {
        accountService(context.app).notifier('resendVerifySignup', context.result);
      },
      verifyHooks.removeVerification()
    ],
    update: [
    ],
    patch: [
      
    ],
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
