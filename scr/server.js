const express = require("express");
const knex = require("knex");
const path = require('path');

function setupServer() {
    const app = express();
    app.use(express.json());

    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname + '/scr/index.html'));
    })

    app.get("/birthstones", async (_, res) => {

        const data = await knex.select().table('birthstones');
        res.status(200)
        res.send(data);
    });

    app.get("/birthstones/:stone", async (req, res) => {
        //be sure that req.body is and obj
        console.log(req.params)
        // await knex('birthstones').insert(req.body);
        res.send("posted").status(200);
    })

    return app;
}

module.exports = setupServer;