const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

const base32toHex = data => {
    if (!data) throw new Error("Invalid string");

    data = data.toUpperCase();
    const isDataValid = /^[A-Z2-7]+=*$/.test(data);
    if (!isDataValid) throw new Error("Data has invalid characters");

    let res = "";

    // Split data into groups of 8
    const chunks = data.match(/.{1,8}/g);
    const lastChunk = chunks[chunks.length - 1];

    const paddingNum = lastChunk.split("=").length - 1;
    if (paddingNum > 6) throw new Error("Invalid data, too much padding");

    for (let i = 0; i < chunks.length; i++) {
        let value = 0;
        const chunk = chunks[i];
        for (let j = 0; j < 8; j++) {
            value *= CHARS.length;
            const char = chunk[j];
            const index = !char || char === "=" ? 0 : CHARS.indexOf(char);
            value += index;
        }
        const hexPadded = "0000000000" + value.toString(16);
        const hex = hexPadded.slice(hexPadded.length - 10);
        res += hex;
    }

    let stripNum = null;
    switch (paddingNum) {
        case 6:
            stripNum = 8;
            break;
        case 4:
            stripNum = 6;
            break;
        case 3:
            stripNum = 4;
            break;
        case 1:
            stripNum = 2;
            break;
        default:
            break;
    }
    if (stripNum !== null) res = res.slice(0, res.length - stripNum);

    return res;
};

const hexToBytes = hex => {
    const bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        const byteStr = `${hex[i]}${hex[i + 1]}`;
        bytes.push(parseInt(byteStr, 16));
    }
    return bytes;
};

module.exports = {
    base32toHex: base32toHex,
    hexToBytes: hexToBytes
};
