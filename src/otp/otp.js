const hello = msg => {
    const str = "" + msg;
    console.log(str);
    return str;
};

module.exports = {
    hello: hello
};
