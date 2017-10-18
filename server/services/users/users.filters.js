module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  if (!connection.user) {
    return false;
  }

  return data;
};
