const https = require('https')

/* Configuration! */
const txAdminUrl      = "123.123.123.123"; /* Set to you txAdmin hostname or IP */
const txAdminPort     = 40120;             /* Default is 40120.  */
const txAdminUsername = "username"         /* Set to a txAdmin user with ban permissions */
const txAdminPassword = "password"         /* Set to a txAdmin user with ban permissions */





/* No need to touch anything below here. You can, but it isn't needed really */
exports("txApi_banPlayer", (source, reason) => {
    const data = JSON.stringify({
        username: txAdminUsername,
        password: txAdminPassword
    })
    
    const options = {
        hostname: txAdminUrl,
        port: txAdminPort,
        path: '/auth/password',
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
        }
    }

    const req = https.request(options, res => {
        var Cookies = res.headers["set-cookie"];
            if (reason == null) {reason = "No reason given"}
            const dataBan = JSON.stringify({
                duration: 'permanent',
                reference: source,
                reason: `${reason}`
            })
    
            const optionsBan = {
                hostname: txAdminUrl,
                port: txAdminPort,
                path: '/player/ban',
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Content-Length': dataBan.length,
                'Cookie': Cookies
                }
            }
    
            const reqBan = https.request(optionsBan, reqBan => {
                reqBan.on('data', d => {
                    console.log("[^2\x1b[1mINFO\x1b[0m^7] \x1b[41m\x1b[30m|txApi|\x1b[0m\x1b[1m ^7Banned player ID:" + source + " for " + reason + "\x1b[0m^0")
                })
            })
    
            reqBan.write(dataBan)
            reqBan.end()

            reqBan.on('error', error => {
                console.log("[^1\x1b[1mERROR\x1b[0m^7] \x1b[41m\x1b[30m|txApi|\x1b[0m\x1b[1m " + error + "\x1b[0m^0")
            })
    
            res.on('data', d => {
                console.log("[^2\x1b[1mINFO\x1b[0m^7] \x1b[41m\x1b[30m|txApi|\x1b[0m\x1b[1m ^7Logged in to txAdmin\x1b[0m^0")
            })
        }
    )

    req.write(data)
    req.end()

    req.on('error', error => {
        console.log("[^1\x1b[1mERROR\x1b[0m^7] \x1b[41m\x1b[30m|txApi|\x1b[0m\x1b[1m " + error + "\x1b[0m^0")
    })
});
