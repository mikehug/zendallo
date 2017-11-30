const assert = require('assert');
const app = require('../../server/app');

describe('\'sessionTokens\' service', () => {
  it('registered the service', () => {
    const service = app.service('session-tokens');

    assert.ok(service, 'Registered the service');
  });
});
