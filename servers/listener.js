const dgram = require("node:dgram");
const { formatMessage } = require("../helper/format");
const {
  apiHost,
  emmiterPort,
  listennerPort,
} = require("../helper/enviroments");
const { saveMessage } = require("../db/services");

const listenerServer = dgram.createSocket("udp4");

listenerServer.on("error", (err) => {
  console.error(`listener server error:\n ${err.stack}`);
  listenerServer.close();
});

listenerServer.on("listening", () => {
  const address = listenerServer.address();
  console.log(`Listener server listening ${address.address}:${address.port}\n`);
});

listenerServer.on("message", (msg, rinfo) => {
  if (`${rinfo.address}:${rinfo.port}` !== `${apiHost}:${emmiterPort}`)
    throw new Error("Unknown server");

  const message = msg.toString();

  if (!message || message === "") throw new Error("Empty message");

  const formattedMessage = formatMessage(message);

  saveMessage(formattedMessage);

  console.log(`${JSON.stringify(formattedMessage)} received from ${rinfo.address}:${rinfo.port}`);
});

listenerServer.bind(listennerPort, () => {
  console.log(`Server is bound to ${listennerPort}`);
});

module.exports = {
  listenerServer,
};
