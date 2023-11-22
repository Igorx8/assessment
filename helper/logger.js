const fs = require("fs");
const path = require("path");

const addLog = (message, context) => {
  try {
    if (!fs.existsSync(path.join(__dirname, "../logs"))) {
      fs.mkdirSync(path.join(__dirname, "../logs"));
    }
    
    if (!fs.existsSync(path.join(__dirname, `../logs/${context}.json`))) {
      fs.writeFileSync(path.join(__dirname, `../logs/${context}.json`), JSON.stringify([]));
    }

    const log = JSON.parse(fs.readFileSync(path.join(__dirname, `../logs/${context}.json`)));

    log.push(message);

    fs.writeFileSync(path.join(__dirname, `../logs/${context}.json`), JSON.stringify(log));

  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  addLog,
};
