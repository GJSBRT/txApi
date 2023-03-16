const config = require('./config.json');

export function debug(message) {
    if (config.debug) {
        console.log(`[^4DEBUG^7]^4 ${message}^7`);
    }
}

export function info(message) {
    console.log(`[^2INFO^7]^2 ${message}^7`);
}

export function warning(message) {
    console.log(`[^3WARNING^7]^3 ${message}^7`);
}

export function error(message) {
    console.log(`[^1ERROR^7]^1 ${message}^7`);
}
