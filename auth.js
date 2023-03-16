const https = require('https')
const config = require('./config.json')
const logger = require('./logger.js')

let Cookies = '';
let lastUpdatedCookies = new Date();

export function authenticate() {
    logger.debug('Authenticating to txAdmin...');
    const data = JSON.stringify({
        username: config.txAdmin.username,
        password: config.txAdmin.password
    })
    
    const options = {
        hostname: config.txAdmin.url,
        port: config.txAdmin.port,
        path: '/auth/password',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    
    const req = https.request(options, res => {
        logger.info('Authenticated to txAdmin!');
        logger.debug(`Cookies: ${res.headers["set-cookie"]}`)
        Cookies = res.headers["set-cookie"];
    })
    
    req.write(data)
    req.end()
    
    req.on('error', error => {
        logger.error(error.message)
    })
}

setInterval(() => {
    if (new Date() - lastUpdatedCookies > 1000 * 60 * 60) {
        authenticate();
    }
})

export function request(method, route, data = {}) {
    const requestData = JSON.stringify(data)

    const options = {
        hostname: config.txAdmin.url,
        port: config.txAdmin.port,
        path: route,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': requestData.length,
            'Cookie': Cookies
        }
    }

    const request = https.request(options, request => {
        logger.debug('Updating cookies...')
        Cookies = res.headers["set-cookie"];
        lastUpdatedCookies = new Date();

        request.on('data', responseData => {
            logger.debug(`Response from [${method}] ${route}: ${responseData}`);
            return responseData;
        })
    })

    request.write(requestData);
    request.end();

    request.on('error', error => {
        logger.error(`Error while requesting [${method}] ${route}: ${error.message}`);
    })
}