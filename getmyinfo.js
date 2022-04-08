const fs = require("fs");
const os = require("os");

function getMyInfo(data) {
  fs.writeFileSync("./data.json", JSON.stringify(data));
}

getMyInfo({
  namaPC: os.hostname(),
  operasiSistem: os.type(),
  versiOperasiSistem: os.release(),
  arsitekturOperasiSistem: os.arch(),
});
