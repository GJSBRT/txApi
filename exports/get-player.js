const auth = require('../auth.js');

export default async function GetPlayer(license) {
    license = license.replace('license:', '');

    auth.request('GET', `/player?license=${license}`).then((res) => {
        return res;
    })
}