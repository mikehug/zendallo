/* eslint no-console: 1 */
console.warn('You are using the default filter for the sessions service. For more information about event filters see https://docs.feathersjs.com/api/events.html#event-filtering'); // eslint-disable-line no-console

module.exports = function (data, connection, hook) {
  // console.log(JSON.stringify(data));
  // console.log(JSON.stringify(connection));
  // console.log(JSON.stringify(hook));
  if(data._id.toString() !== connection.user.currentSession.toString() ) {
    return false;
  }

  return data;
};
