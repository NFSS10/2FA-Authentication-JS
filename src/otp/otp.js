const Crypto = require("crypto");
const Utils = require("../utils");

const getHotpCode = (secret, counter = 1, digits = 6) => {
    if (counter < 1) throw new Error("Counter must be greater than or equal to one.");
    if (digits < 6) throw new Error("Digits must be greater than or equal to six.");

    const buffer = Buffer.alloc(8, 0);
    buffer.writeUInt32BE(counter, 4);

    const hex = Utils.base32toHex(secret);
    const hexBytes = Utils.hexToBytes(hex);

    // HMAC generation
    const hmac = Crypto.createHmac("sha1", Buffer.from(hexBytes));
    hmac.update(buffer);
    const hmacValue = hmac.digest();

    // Dynamic truncation
    const offset = hmacValue[hmacValue.length - 1] & 0xf;
    let code =
        ((hmacValue[offset] & 0x7f) << 24) |
        ((hmacValue[offset + 1] & 0xff) << 16) |
        ((hmacValue[offset + 2] & 0xff) << 8) |
        (hmacValue[offset + 3] & 0xff);
    code = code & 0x7fffffff;

    // code formatting
    code = code.toString();
    code = code.slice(code.length - digits, code.length);

    return code;
};

const getTotpCode = (secret, timestampMS, digits, interval = 30) => {
    let timestamp = timestampMS || Date.now();
    timestamp = Math.floor(timestamp / 1000);
    timestamp = Math.floor(timestamp / interval);

    const code = getHotpCode(secret, timestamp, digits);
    return code;
};

module.exports = {
    getHotpCode: getHotpCode,
    getTotpCode: getTotpCode
};
