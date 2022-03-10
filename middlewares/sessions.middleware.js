const sessions = require('express-session');
const constants = require('../misc/constants.misc');

const oneDay = 1000 * 60 * 60 * 24;

exports.sessions = sessions({
    secret: constants.SESSIONS_SECRET_KEY,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
})