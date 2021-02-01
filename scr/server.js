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
        const a = await knex('birthstones').insert(req.params)
        const data = await knex.select().table('birthstones');
        res.send(data).status(200);
    })

    app.delete("/birthstones/:stone", async (req, res) => {
        //TODO serial keeps going up
        await knex('birthstones').where(req.params).del();
        const data = await knex.select().table('birthstones')
        res.send(data).status(200)
    })

    app.patch("/birthstones/:stone/:color", async (req, res) => {
        console.log('stone, colo')

        const { stone, color } = req.params;
        console.log(stone, color)
        await knex('birthstones').where({ stone: stone }).update({ color: color })
        const data = await knex.select().table('birthstones')
        res.send(data).status(200)
    })

    return app;
}

module.exports = setupServer;