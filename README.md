# 2FA Authentication JS

A Javascript package to handle 2FA authentication. Currently supports HOTP and TOTP code generation (compatible with Google Authenticator app).

## Installation

```shell
npm install @nfss10/2fa-auth@latest
```

## Usage

```js
const nfss10Auth = require("@nfss10/2fa-auth");

const base32Secret = "JBSWY3DPEHPK3PXP";
const counter = 5;
const hotpCode = nfss10Auth.OTP.getHotpCode(base32Secret, counter);
console.log("HOTP code:", hotpCode); // Logs: "HOTP code: 768897"

const timestampMS = 1642626525779;
const totpCode = nfss10Auth.OTP.getTotpCode(base32Secret, timestampMS);
console.log("TOTP code:", totpCode); // Logs: "TOTP code: 373275"
```

#### HOTP code generator

```js
getHotpCode(secret, counter, digits);
```

- `secret` - Base32 encoded secret key
- `counter` - counter value, default is 1
- `digits` - (optional) number of digits of the resulting code, default is 6

#### TOTP code generator

```js
getTotpCode(secret, timestampMS, digits, interval);
```

- `secret` - Base32 encoded secret key
- `timestampMS` - (optional) Timestamp in milliseconds
- `digits` - (optional) number of digits of the resulting code, default is 6
- `interval` - (optional) Interval window in seconds for the code, default is 30

## Tests

```shell
npm tests
```
