# Personal sign
Ethereum personal sign with metamask
---
On frontend you need one params:
- message

your ethereum address is taken from the metamask.

On backend you need know:
- origin message
- sign

Recovers the account that signed the message.  
If your backend know account he can be sure that the message came from a trusted user.
## Install & Usage
```BASH
$ npm install
$ npm start
```