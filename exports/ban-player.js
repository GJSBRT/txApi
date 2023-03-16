const auth = require('../auth.js');

export default async function BanPlayer(source, reason) {
    auth.request('POST', '/player/ban', {   
        duration: 'permanent',
        reference: source,
        reason: `${reason}`
    }).then((res) => {
        return res;
    })
}