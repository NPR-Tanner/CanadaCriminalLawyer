const crypto = require('crypto');

const SECRET = 'IWA-CCL-REST-API';


export const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}

export const random = () => crypto.randomBytes(128).toString('base64');