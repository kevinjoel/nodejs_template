exports.SERVER_PORT = 3001;
exports.SESSIONS_SECRET_KEY = 'thisismysecrctekeyfhrgfgrfrty84fwir767';

exports.RESPONSE_401_ERROR = {
    ok: false,
    message: 'Unauthorized URL',
}

exports.RESPONSE_403_ERROR = {
    ok: false,
    message: 'Invalid credentials',
}