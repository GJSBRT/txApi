const auth = require('./auth.js');
const { default: BanPlayer } = require('./exports/ban-player');

auth.authenticate();

/* Exports */
exports('txApi_banPlayer', BanPlayer)
