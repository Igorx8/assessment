const dgram = require("node:dgram");

const emitterServer = dgram.createSocket("udp4");
const { apiHost, emmiterPort, listennerPort } = require('../helper/enviroments')

emitterServer.on("error", (err) => {
  console.error(`emitter server error:\n ${err.stack}`);
});

emitterServer.on("listening", () => {
  const address = emitterServer.address();
  console.log(`Emitter server listening ${address.address}:${address.port}\n`);
});

emitterServer.on("message", (msg, rinfo) => {
  console.log(`Message: ${msg} received from ${rinfo.address}:${rinfo.port}`);
});

emitterServer.bind(emmiterPort, () => {
  console.log(`Server is bound to ${emmiterPort}`);
});

setInterval(() => {
  const newMessage = require('../helper/messageGenerator').messageGenerator();
  emitterServer.send(newMessage, listennerPort, apiHost, (err) => {
    if (err) throw err;
    console.log(`Message sent from ${apiHost}:${emmiterPort} \n`);
  });
}, 5000)

module.exports = {
  emitterServer,
};
