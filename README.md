# 2FA Authentication JS


## Example

```javascript
const nfss10Auth = require("@nfss10/2fa-auth");

const base32Secret = "JBSWY3DPEHPK3PXP";
const counter = 3;
const hotpCode = nfss10Auth.OTP.getHotpCode("JBSWY3DPEHPK3PXP", 5);
console.log("HOTP code:", hotpCode); // Logs:  "HOTP code: 768897"

const timestampMS = 1642626525779;
const totpCode = nfss10Auth.OTP.getTotpCode("JBSWY3DPEHPK3PXP", timestampMS);
console.log("TOTP code:", totpCode); // Logs: "TOTP code: 373275"
```

