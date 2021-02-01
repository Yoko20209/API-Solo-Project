const express = require("express");
const knex = require("../knex");
const path = require('path');
const pg = require('../knex')({ client: 'pg' });

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

    app.post("/birthstones/:stone/:color", async (req, res) => {
        //be sure that req.body is and obj
        console.log(req.params)
        // const obj = req.params
        await pg('birthstones').insert({ stone: "moonston", color: "white" })
        const data = await knex.select().table('birthstones');
        res.send("posted").status(200);
    })

    return app;
}

module.exports = setupServer;