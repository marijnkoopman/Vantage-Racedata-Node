require("colors");
require("dotenv").config();

// const { client, handle_json, handle_message } = require("./core/tcp");
const { app, server, io } = require("./core/server");