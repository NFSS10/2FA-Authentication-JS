const auth2fa = require("../..");

describe("OTP", () => {
    it("getHotpCode", () => {
        let str = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 1);
        expect(str).toEqual("996554");

        str = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 2);
        expect(str).toEqual("602287");

        str = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 5);
        expect(str).toEqual("768897");

        str = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 6);
        expect(str).toEqual("883951");

        str = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 15);
        expect(str).toEqual("917526");

        str = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 56);
        expect(str).toEqual("746871");
    });
});
