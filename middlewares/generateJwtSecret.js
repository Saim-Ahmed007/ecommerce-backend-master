const crypto = require('crypto');

function generateJwtSecret() {
    const secret = crypto.randomBytes(64).toString('hex');
    return secret;
};

console.log(generateJwtSecret());