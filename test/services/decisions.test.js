const assert = require('assert');
const app = require('../../server/app');

describe('\'decisions\' service', () => {
  it('registered the service', () => {
    const service = app.service('decisions');

    assert.ok(service, 'Registered the service');
  });
});
