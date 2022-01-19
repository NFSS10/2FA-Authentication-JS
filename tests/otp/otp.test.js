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

    it("getTotpCode", () => {
        let str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626525779);
        expect(str).toEqual("373275");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626525779);
        expect(str).toEqual("373275");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626554470);
        expect(str).toEqual("546517");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626582298);
        expect(str).toEqual("887163");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626594147);
        expect(str).toEqual("887163");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626611509);
        expect(str).toEqual("701748");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626622537);
        expect(str).toEqual("701748");

        str = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642627016783);
        expect(str).toEqual("988441");
    });
});
