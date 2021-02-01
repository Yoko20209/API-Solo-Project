const express = require("express");
const knex = require("./knex");
const path = require('path');

function setupServer() {
    const app = express();
    app.use(express.json());

    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
    })

    app.get("/birthstones", async (_, res) => {

        const data = await knex.select().table('birthstones');
        res.status(200)
        res.send(data);
    });

    return app;
}

module.exports = setupServer;