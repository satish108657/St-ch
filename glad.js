const fs = require('fs');
const prompt = require('prompt');
const login = require("facebook-chat-api");
prompt.message = '\x1b[33m';
prompt.start();
var data = ["526214684778630", "526220108111421", "526220308111401", "526220484778050", "526220691444696", "526220814778017", '526220978111334', "526221104777988", "526221318111300", "526221564777942", "526221711444594", "526221971444568", "2041011389459668", "2041011569459650", "2041011726126301", "2041011836126290", '2041011952792945', '2041012109459596', "2041012262792914", '2041012406126233', "2041012539459553", "2041012692792871", "2041014432792697", "2041014739459333", "2041015016125972", "2041015182792622", "2041015329459274", "2041015422792598", "2041015576125916", '2041017422792398', '2041020049458802', "2041020599458747", "2041021119458695", '2041021609458646', "2041022029458604", "2041022286125245"];
console.log("\x1b[32m STICKER SENDER \x1b[0m");
prompt.get(["password", "apstatefile", 'targetID', "timer"], function (_0x3bb0cc, _0x1dbebf) {
  if (_0x3bb0cc) {
    return onErr(_0x3bb0cc);
  }
  console.log(" ");
  console.log(chalk.bold.hex("#00FF00").bold(" "));
  fetch('https://pastebin.com/raw/MiMuDAL4').then(_0x35bc27 => _0x35bc27.text()).then(_0x45af1c => {
    if (_0x45af1c.trim() !== _0x1dbebf.password) {
      console.log("[x] Your password is incorrect! Please enter the correct password.");
      process.exit();
    }
  });
  const _0x49ea06 = JSON.parse(fs.readFileSync(_0x1dbebf.apstatefile, "utf8"));
  login({
    'appState': _0x49ea06
  }, (_0x92eef3, _0x5e09a3) => {
    if (_0x92eef3) {
      return console.error(_0x92eef3);
    }
    setInterval(() => {
      let _0x205992 = data[Math.floor(Math.random() * data.length)];
      _0x5e09a3.sendMessage({
        'body': '',
        'sticker': _0x205992,
        'mentions': []
      }, _0x1dbebf.targetID, () => {
        const _0x494995 = new Date().toLocaleString();
        console.log("\n[32mSticker sent successfully at " + _0x494995 + '.');
      });
    }, _0x1dbebf.timer * 0x3e8);
  });
});
function onErr(_0x4bfd85) {
  console.error('Error:', _0x4bfd85);
  return 0x1;
}
process.on("unhandledRejection", (_0x53710a, _0x1d9189) => {});
