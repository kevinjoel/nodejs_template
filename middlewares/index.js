const auth = require('./authentication.middleware');
const sessions = require('./sessions.middleware');

const middlewares = {};

middlewares.auth = auth;
middlewares.sessions = sessions.sessions;

module.exports = middlewares;