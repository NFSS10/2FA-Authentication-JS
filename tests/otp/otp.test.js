const auth2fa = require("../..");

describe("OTP", () => {
    it("getHotpCode", () => {
        let code = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 1);
        expect(code).toEqual("996554");

        code = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 2);
        expect(code).toEqual("602287");

        code = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 5);
        expect(code).toEqual("768897");

        code = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 6);
        expect(code).toEqual("883951");

        code = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 15);
        expect(code).toEqual("917526");

        code = auth2fa.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 56);
        expect(code).toEqual("746871");
    });

    it("getTotpCode", () => {
        let code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626525779);
        expect(code).toEqual("373275");

        code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626554470);
        expect(code).toEqual("546517");

        code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626582298);
        expect(code).toEqual("887163");

        code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626594147);
        expect(code).toEqual("887163");

        code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626611509);
        expect(code).toEqual("701748");

        code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642626622537);
        expect(code).toEqual("701748");

        code = auth2fa.OTP.getTotpCode("JBSWY3DPEHPK3PXP", 1642627016783);
        expect(code).toEqual("988441");
    });
});
