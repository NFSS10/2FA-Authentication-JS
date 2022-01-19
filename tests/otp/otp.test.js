const auth2fa = require("../..");

describe("Example test", () => {
    it("Hello", () => {
        const str = auth2fa.OTP.hello("test str");
        expect(str).toEqual("test str");
    });

    it("HOTP", () => {
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

    it("Utils - base32toHex", () => {
        const b32Str = [
            // RFC4658 test vectors
            "MY======",
            "MZXQ====",
            "MZXW6===",
            "MZXW6YQ=",
            "MZXW6YTB",
            "MZXW6YTBOI======",
            // random data got it from here https://github.com/LinusU/base32-encode/blob/master/test.js
            "OM======",
            "7AGA====",
            "MRIA====",
            "ZSI5A===",
            "NRQMA===",
            "J5VCG===",
            "RC2E6GA=",
            "SC5NARYU",
            "5HXR334AQY======",
            "QP7D7HA6SMBA====",
            "CWVB67FPYF6LQ===",
            "3JI5J7WURNGDFXA=",
            "YS7BIIUFCLLSTGBR",
            "F4TTYW266BDSJ6VZIQ======",
            "S2O2DOAOYJCC2K65JPNQ====",
            "GH223NIHSL2UTU3RJ47ZS===",
            "NJSU66QHFQUZKGJQOAGAUYI=",
            "B7RJ22BFVWMZ5B6ZW7FMGWE5",
            "B6LAVNCOCZMXHJIXFTGSSSZUCI======",
            "GJNZ7WCHUQP3BVEFYID2DJNQFXHQ====",
            "3X4A5PRBX4NR4EVGJROMNJ2LLWJN2===",
            "YDFOKLDPMQOOAST64W42R6UN5UJBXSQ=",
            "Q4UEBI2VZDDQLBXUMLE6M2POOYGLGU36",
            "K5Z74ITGFAMKCIGFNCECJSJV7YAYECFESY======",
            "IFXCHK6FETI3QVZW4K7KNT7M2UMSPCIDJIUA====",
            "QPJDQ3V527UOQGHMADR4ZWECVKJTXEC3PYXEI===",
            "UL5IXCA7HOACJ5JHIV3DYSXAR2QSXX4L54NHF6A=",
            "WB2K5C467XQPC7ZXXTFN3YAG2A4ZS62ZZDX3AWW5",
            "OZH67FA25Z7EC3OCASXFVOOFXHHGIRLHPGHGQSNOVE======",
            "JGK5TAI7G72ZPF6XYO43TZJSLKTYE52BL5YPJLGPLCGA====",
            "ETYICLFI53KYG5GBDJYAR4FSMJUYW4X5E6JHBEQI5KWLE===",
            "24DJEVBYCDKL6UGYDT2EUVMADJKXUOEKGQJWPR7KA56KGBQ=",
            "NYEKRHFDNNTX76H6THTIUESBZDMM54SXBJPWBNSBPUSTRMYM",
            "6L6CGGN5FFCXZTIB5DQZJ3U327UXFGFWMEG7JKYPHVN2UCZNPTHWTAU63N2O33Y="
        ];
        const hexStr = [
            // RFC4658 test vectors
            "66",
            "666f",
            "666f6f",
            "666f6f62",
            "666f6f6261",
            "666f6f626172",
            // random data - got it from here https://github.com/LinusU/base32-encode/blob/master/test.js
            "73",
            "f80c",
            "6450",
            "cc91d0",
            "6c60c0",
            "4f6a23",
            "88b44f18",
            "90bad04714",
            "e9ef1def8086",
            "83fe3f9c1e9302",
            "15aa1f7cafc17cb8",
            "da51d4fed48b4c32dc",
            "c4be14228512d7299831",
            "2f273c5b5ef04724fab944",
            "969da1b80ec2442d2bdd4bdb",
            "31f5adb50792f549d3714f3f99",
            "6a654f7a072c29951930700c0a61",
            "0fe29d6825ad999e87d9b7cac3589d",
            "0f960ab44e165973a5172ccd294b3412",
            "325b9fd847a41fb0d485c207a1a5b02dcf",
            "ddf80ebe21bf1b1e12a64c5cc6a74b5d92dd",
            "c0cae52c6f641ce04a7ee5b9a8fa8ded121bca",
            "872840a355c8c70586f462c9e669ee760cb3537e",
            "5773fe22662818a120c5688824c935fe018208a496",
            "416e23abc524d1b85736e2bea6cfecd5192789034a28",
            "83d2386ebdd7e8e818ec00e3ccd882aa933b905b7e2e44",
            "a2fa8b881f3b8024f52745763c4ae08ea12bdf8bef1a72f8",
            "b074ae8b9efde0f17f37bccadde006d039997b59c8efb05add",
            "764fef941aee7e416dc204ae5ab9c5b9ce644567798e6849aea9",
            "4995d9811f37f59797d7c3b9b9e5325aa78277415f70f4accf588c",
            "24f0812ca8eed58374c11a7008f0b262698b72fd2792709208eaacb2",
            "d70692543810d4bf50d81cf44a55801a557a388a341367c7ea077ca306",
            "6e08a89ca36b677ff8fe99e68a1241c8d8cef2570a5f60b6417d2538b30c",
            "f2fc2319bd29457ccd01e8e194ee9bd7e97298b6610df4ab0f3d5baa0b2d7ccf69829edb74edef"
        ];

        for (let i = 0; i < b32Str.length; i++) {
            const b32Data = b32Str[i];
            const hexRes = hexStr[i];

            const res = auth2fa.Utils.base32toHex(b32Data);
            expect(res).toEqual(hexRes);
        }
    });
});
