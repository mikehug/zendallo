const users = require('./users/users.service.js');
const teams = require('./teams/teams.service.js');
const sessions = require('./sessions/sessions.service.js');
const sessionTokens = require('./session-tokens/session-tokens.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(teams);
  app.configure(sessions);
  app.configure(sessionTokens);
};
