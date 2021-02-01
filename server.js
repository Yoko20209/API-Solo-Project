const express = require("express");

function setupServer() {
    const app = express();
    app.use(express.json());

    return app;
}

module.exports = setupServer;