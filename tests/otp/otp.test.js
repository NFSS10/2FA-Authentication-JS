const auth2fa = require("../..");

describe("Example test", () => {
    it("Hello", () => {
        const str = auth2fa.OTP.hello("test str");
        expect(str).toEqual("test str");
    });
});
