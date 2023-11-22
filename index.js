async function start() {
  const { setup } = require("./db/services");

  try {
    await setup();

    require("./servers/listener");
  } catch (e) {
    console.error(`Error on start: ${e}`);
  }
}

start();
