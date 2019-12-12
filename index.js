require("colors");
require("dotenv").config();

// const { client, handle_json, handle_message } = require("./tcp");
const { app, server, io } = require("./server");

// Om sockets te testen
// setInterval(() => {
//     io.emit("test", "Dit is een test bericht!");
// }, 2e3);