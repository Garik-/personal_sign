const express = require('express')
const serveStatic = require('serve-static')
const util = require('ethereumjs-util')
const port = 30000

const app = express()
app.use(serveStatic(__dirname, {'index': ['index.html']}))
app.get('/recover', (req, resp) => {
    const text = "Some string"
    const msg = Buffer.from(text)
    const sig = "0x86fa1da7ef46b002e40c97a2e56db5f587bbcfcba5e1941d04ba9e09360293453c8d550fa37f5a8b6bd12fcff65f7c1a24a0407e5b2a3e337f2042eb28bb927c1b"
    const res = util.fromRpcSig(sig)
    const prefix = Buffer.from("\x19Ethereum Signed Message:\n");
    const prefixedMsg = util.keccak256(
    Buffer.concat([prefix, Buffer.from(String(msg.length)), msg])
    );
    const pubKey  = util.ecrecover(prefixedMsg, res.v, res.r, res.s);
    const addrBuf = util.pubToAddress(pubKey);
    const addr    = util.bufferToHex(addrBuf);

    console.log(addr)
    // need 0xF95eaf22047Ac831046658532b7B0D2e6F9c359a

    resp.end()
})
app.listen(port, () => {
  console.log(`Open http://localhost:${port} in a browser to start using the example`)
})